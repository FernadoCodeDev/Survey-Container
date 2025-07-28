import React, { useEffect, useState } from "react";
import type { Survey } from "../types";
import '../styles/widget.css';

interface SurveyWidgetProps {
  surveyId: string;
  apiUrl: string;
  fetchUrl?: string;
  onSubmit?: (responses: Record<string, string>) => Promise<void>;
  loadingText?: string;
  submitButtonText?: string;
  className?: string;
}

export const SurveyWidget: React.FC<SurveyWidgetProps> = ({
  surveyId,
  apiUrl,
  fetchUrl,
  onSubmit,
  loadingText = "Cargando encuesta...",
  submitButtonText = "Enviar respuestas",
  className = ""
}) => {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});

  useEffect(() => {
  const finalUrl = typeof fetchUrl === "string"
  ? fetchUrl.includes("?") || fetchUrl.includes("=")
    ? `${fetchUrl}${surveyId}` 
    : `${fetchUrl.replace(/\/?$/, "/")}${surveyId}` 
  : `${apiUrl}/surveys`;


    fetch(finalUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const surveyFound = data.find((e: Survey) => e.id === surveyId);
          setSurvey(surveyFound || null);
        } else {
          setSurvey(data);
        }
      })
      .catch((error) => {
        console.error("Error al hacer fetch:", error);
      });
  }, [surveyId, apiUrl, fetchUrl]);

  const handleChange = (questionId: string, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async () => {
    const payload = Object.entries(responses)
      .map(([questionId, content]) => ({ questionId, content: content.trim() }))
      .filter((r) => r.content.length > 0);

    if (payload.length < (survey?.questions.length || 0)) {
      alert("Responde todas las preguntas");
      return;
    }

    if (onSubmit) {
      await onSubmit(responses);
    } else {
      const res = await fetch(`${apiUrl}/responses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses: payload }),
      });

      if (res.ok) {
        alert("Respuestas enviadas");
      } else {
        alert("Error al enviar las respuestas");
      }
    }
  };

  if (!survey) return <p>{loadingText}</p>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={`survey-form ${className}`}
    >
      <h2 className="survey-title">{survey.text}</h2>

      {survey.questions.map((q) => (
        <div key={q.id} className="survey-question">
          <label className="survey-label" htmlFor={`question-${q.id}`}>
            {q.text}
          </label>
          <input
            id={`question-${q.id}`}
            type="text"
            name={`question-${q.id}`}
            required
            className="survey-input"
            value={responses[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
          />
        </div>
      ))}

      <button type="submit" className="survey-button">
        {submitButtonText}
      </button>
    </form>
  );
};

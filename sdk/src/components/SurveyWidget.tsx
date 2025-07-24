import React, { useEffect, useState } from "react";
import type { Survey } from "../types";
import '../../../demo-app/src/index.css';
interface SurveyWidgetProps {
  surveyId: string;
  apiUrl: string; 
}

export const SurveyWidget: React.FC<SurveyWidgetProps> = ({ surveyId, apiUrl }) => {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(`${apiUrl}/surveys`)
      .then((res) => res.json())
      .then((data) => {
        const surveyFound = data.find((e: Survey) => e.id === surveyId);
        setSurvey(surveyFound || null);
      })
      .catch((error) => {
        console.error("Error al hacer fetch:", error);
      });
  }, [surveyId, apiUrl]);

  const handleChange = (questionId: string, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async () => {
    const payload = Object.entries(responses)
      .map(([questionId, content]) => ({ questionId, content: content.trim() }))
      .filter((r) => r.content.length > 0);

    if (payload.length < (survey?.questions.length || 0)) {
      alert("Por favor responde todas las preguntas");
      return;
    }

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
  };

  if (!survey) return <p>Cargando encuesta...</p>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="survey-form"
    >
      <h2 className="survey-title">{survey.text}</h2>

      {survey.questions.map((q) => (
        <div key={q.id} className="survey-question">
          <label className="survey-label">{q.text}</label>
          <input
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
        Enviar respuestas
      </button>
    </form>
  );
};
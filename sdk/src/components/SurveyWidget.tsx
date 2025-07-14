import React, { useEffect, useState } from "react";
import type { Survey, Response } from "../types";

/*import dotenv from "dotenv";
dotenv.config();
*/
interface SurveyWidgetProps {
  surveyId: string;
  apiUrl?: string;
}

export const SurveyWidget: React.FC<SurveyWidgetProps> = ({
  surveyId,
  apiUrl = "http://localhost:3000/api",
}) => {
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
      .filter((r) => r.content.length > 0); // 💡 evita vacíos

    if (payload.length < survey?.questions.length) {
      alert("Por favor responde todas las preguntas");
      return;
    }

    const res = await fetch(`${apiUrl}/responses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ responses: payload }),
    });

    if (res.ok) {
      alert("Responses sent successfully!");
    } else {
      alert("An error occurred while sending responses");
    }
  };

  if (!survey) return <p>Loading survey...</p>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); 
        handleSubmit(); 
      }}
      className="flex flex-col gap-4 p-4 m-4 bg-red-500"
    >
      <h2 className="mb-4 text-lg font-semibold">{survey.text}</h2>

      {survey.questions.map((p) => (
        <div key={p.id} className="flex flex-col gap-4">
          <label className="block mb-1 text-sm font-medium">{p.text}</label>
          <input
            type="text"
            name={`question-${p.id}`}
            required 
            className="w-full px-2 py-1 border rounded"
            value={responses[p.id] || ""}
            onChange={(e) => handleChange(p.id, e.target.value)}
          />
        </div>
      ))}

      <button
        type="submit"
        className="px-4 py-2 m-4 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Send responses
      </button>
    </form>
  );
};

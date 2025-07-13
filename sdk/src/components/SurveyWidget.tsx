import React, { useEffect, useState } from "react";
import type { Survey, Response } from "../types";

interface SurveyWidgetProps {
  surveyId: string;
  // Backend URL, optional to customize
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
      });
  }, [surveyId, apiUrl]);

  const handleChange = (questionId: string, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async () => {
    const payload = Object.entries(responses).map(([questionId, content]) => ({
      questionId,
      content,
    }));

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
    <div className="p-4 border rounded shadow max-w-md bg-white">
      <h2 className="text-lg font-semibold mb-4">{survey.text}</h2>

      {survey.questions.map((p) => (  
       
        <div key={p.id} className="mb-3">
          <label className="block text-sm font-medium mb-1">{p.text}</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            value={responses[p.id] || ""}
            onChange={(e) => handleChange(p.id, e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send responses
      </button>
    </div>
  );
};

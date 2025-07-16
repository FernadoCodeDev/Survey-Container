// src/MetricsViewer.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Question = {
  id: string;
  text: string;
};

type Survey = {
  id: string;
  qualification: string;
  questions: Question[];
};

const MetricsViewer: React.FC = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/surveys")
      .then((res) => res.json())
      .then((data) => setSurveys(data));
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Encuestas Disponibles</h1>

      {surveys.map((survey) => (
        <div key={survey.id} className="metric-box">
          <h2 className="text-lg font-semibold">{survey.qualification}</h2>

          <ul className="question">
            {survey.questions.map((q) => (
              <li key={q.id}>{q.text}</li>
            ))}
          </ul>

          <Link
            to={`/survey/${survey.id}`}
            className="button-link"
          >
            Contestar esta encuesta
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MetricsViewer;

import React from "react";
import { SurveyWidget } from "../../sdk/src";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SurveyWidget
        surveyId={import.meta.env.VITE_SURVEY_ID}
      />
    </div>
  );
};

export default App;

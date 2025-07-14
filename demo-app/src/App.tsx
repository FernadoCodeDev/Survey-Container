import React from "react";
import { SurveyWidget } from "../../sdk/src/components/SurveyWidget";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 m-auto bg-white">
      <SurveyWidget
        surveyId={import.meta.env.VITE_SURVEY_ID}
      />
    </div>
  );
};

export default App;

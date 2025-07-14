import React from "react";
import { SurveyWidget } from "../../sdk/src";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-white">
      <SurveyWidget
        surveyId={import.meta.env.VITE_SURVEY_ID}
      />
    </div>
  );
};

export default App;

import React from "react";
import { SurveyWidget } from "../../sdk/src";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SurveyWidget
        surveyId="2405bdce-7620-470a-9a82-ba16935fd071"
      />
    </div>
  );
};

export default App;

import React from "react";
import { SurveyWidget } from "../../sdk/src";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto max-w-[60rem] ">
      <SurveyWidget
        surveyId=""
         apiUrl="http://localhost:3000/api"
      />
    </div>
  );
};

export default App;

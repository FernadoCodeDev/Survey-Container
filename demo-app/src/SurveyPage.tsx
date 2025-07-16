import { useParams } from "react-router-dom";
import { SurveyWidget } from "../../sdk/src";

const SurveyPage = () => {
  const { surveyId } = useParams();

  if (!surveyId) return <p>Error: encuesta no encontrada</p>;

  return (
    <div className="max-w-md p-4 mx-auto">
      <SurveyWidget surveyId={surveyId} />
    </div>
  );
};

export default SurveyPage;

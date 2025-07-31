import { useParams } from "react-router-dom";
import { SurveyWidget } from "../../sdk/src";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SurveyPage = () => {
  const { surveyId } = useParams();

  if (!surveyId) return <p>Error: encuesta no encontrada</p>;

  return (
    <div className="max-w-md p-4 mx-auto">
      <SurveyWidget
        surveyId={surveyId}
        apiUrl="http://localhost:3000/api"
        onAlert={(msg, type) => {
          toast(msg, {
            type,
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default SurveyPage;

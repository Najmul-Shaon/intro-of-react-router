import { useNavigate,  useRouteError } from "react-router-dom";

const NotFoundData = () => {
  const error = useRouteError();
  
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Opps! not found</h1>
      <p>{error.statusText || error.messege}</p>
      <button onClick={handleGoHome} type="button">
        Go Home
      </button>
    </div>
  );
};

export default NotFoundData;

import { useNavigate } from "react-router-dom";

export default function ServerError() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1 className="err-heading">500 Internal Server Error</h1>
      <div className="err-desc">Please try again later</div>
      <button onClick={() => navigate(-1)} className="err-btn">
        Back to home
      </button>
    </div>
  );
}

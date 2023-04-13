import { useNavigate } from "react-router-dom";

export default function UserError() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1 className="err-heading">404 Not Found !</h1>
      <div className="err-desc">
        Please enter valid city name (e.g. <em>Delhi, London</em>)
      </div>
      <button onClick={() => navigate(-1)} className="err-btn">
        Back to home
      </button>
    </div>
  );
}

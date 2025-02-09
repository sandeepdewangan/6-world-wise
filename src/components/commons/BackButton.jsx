import { useNavigate } from "react-router-dom";

const BackButton = ({ children }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
};

export default BackButton;

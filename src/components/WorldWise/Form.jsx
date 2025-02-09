import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Form = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button>Add</button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default Form;

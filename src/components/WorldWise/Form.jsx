import { useSearchParams } from "react-router-dom";
import BackButton from "../commons/BackButton";

const Form = () => {
  const [searchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  if (!lat && !lng)
    return (
      <p>
        Please select from map
        <BackButton>Back</BackButton>
      </p>
    );
  return (
    <div>
      <form>
        <input type="text" placeholder="City name" />
        <input type="text" placeholder="Notes" />
        <button>Add</button>
        <BackButton>Back</BackButton>
      </form>
    </div>
  );
};

export default Form;

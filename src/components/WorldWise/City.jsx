import { useParams } from "react-router-dom";

const City = () => {
  const id = useParams();
  console.log(id);

  return (
    <div>
      <p>City</p>
    </div>
  );
};

export default City;

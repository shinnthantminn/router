import { useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams();

  console.log(params.name);

  return <div className="container">Contact id is {params.name}</div>;
};

export default Contact;

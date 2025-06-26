import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="p-10">
      <h1>hALLO WORLD</h1>
    </div>
  );
};

export default PortfolioDetail;

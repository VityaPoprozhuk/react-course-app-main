import CostForm from "./CostForm";
import "./NewCost.css";
const NewCost = (props) => {
  const SaveCostDataHendler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.addComponent(costData);
  };
  return (
    <div>
      <CostForm onSaveCostData={SaveCostDataHendler} />
    </div>
  );
};
export default NewCost;

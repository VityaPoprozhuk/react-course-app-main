import CostForm from "./CostForm";
import "./NewCost.css";
const NewCost = (props) => {

  const upChangeButtonNow = () => {
    props.onChangeButton()
  }

  const SaveCostDataHendler = (inputCostData) => {



    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.addComponent(costData);
    props.onChangeButton()
  };
  return (
    <div>
      <CostForm onChangeButton={upChangeButtonNow} onSaveCostData={SaveCostDataHendler} />
    </div>
  );
};
export default NewCost;

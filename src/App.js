import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2020, 2, 12),
    description: "Холодильник",
    price: 900,
  },
  {
    id: "c2",
    date: new Date(2022, 8, 13),
    description: "Iphone",
    price: 1200,
  },
  {
    id: "c3",
    date: new Date(2021, 10, 4),
    description: "skirt",
    price: 30,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const [buttonLock, setButtonLock] = useState(false)





  const addCostHendler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...costs];
    });
  };

  // filter((year) => year.date.getFullYear() === selectedYear)



  return (
    <div>
      {buttonLock ? <NewCost onChangeButton={() => setButtonLock(false)} addComponent={addCostHendler} /> : <button className="btnApp" onClick={() => setButtonLock(true)}>Add new COST</button>}
      <Costs costs={costs} />
    </div>
  );
};

export default App;

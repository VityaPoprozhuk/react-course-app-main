import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    price: 900,
  },
  {
    id: "c2",
    date: new Date(2021, 8, 13),
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

  const addCostHendler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...costs];
    });
  };

  return (
    <div>
      <h1>Начнем изучение реакт</h1>
      <NewCost addComponent={addCostHendler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;

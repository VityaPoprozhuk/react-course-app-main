import React, { useState } from "react";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYears = (year) => {
    setSelectedYear(year);
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYears} />

        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            price={cost.price}
          />
        ))}
      </Card>
    </div>
  );
};
export default Costs;

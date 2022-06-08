import React, { useState } from "react";
import CostsDiagram from "./CostsDiagram";
import Card from "../UI/Card";
import CostList from "./CostList";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);

  const changeYears = (year) => {
    setSelectedYear(year);
  };

  const filterArr = props.costs.filter(
    (cost) => cost.date.getFullYear() === parseInt(selectedYear)
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYears} />
        <CostsDiagram costs={filterArr} />
        <CostList costs={filterArr} />
      </Card>
    </div>
  );
};
export default Costs;

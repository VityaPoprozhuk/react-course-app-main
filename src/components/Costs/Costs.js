import React, { useState } from "react";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState(2019);

  const changeYears = (year) => {
    setSelectedYear(year);
  };

  const filterArr = props.costs.filter((cost) =>
    cost.date.getFullYear() === parseInt(selectedYear)
  )

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYears} />
        {filterArr.length === 0 && <p>There are no expenses this year</p>}
        {filterArr.map((cost) => (
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

import React, { useState } from "react";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState(2021);

  const changeYears = (year) => {

    setSelectedYear(year);
  };

  console.log(typeof selectedYear);



  const filterArr = props.costs.filter((cost) =>

    cost.date.getFullYear() === parseInt(selectedYear)


  )
  console.log(filterArr)




  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYears} />

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

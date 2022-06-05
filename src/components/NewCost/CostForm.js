import React, { useState } from "react";
import "./CostForm.css";


const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputSum, setInputSum] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHendler = (event) => {
    setInputName(event.target.value);
  };
  const sumChangeHendler = (event) => {
    setInputSum(event.target.value);
  };
  const dateChangeHendler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHendler = (event) => {
    event.preventDefault();

    const data = {
      description: inputName,
      price: inputSum,
      date: new Date(inputDate),
    };


props.onSaveCostData(data)
    setInputName("");
    setInputSum("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHendler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHendler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputSum}
            onChange={sumChangeHendler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHendler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;

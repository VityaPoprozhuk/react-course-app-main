import { useState } from 'react';
import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {

   const [descriptionChange, setDescriptionCange] = useState(props.description)

   const changeDescriptionHendler = () => {
      setDescriptionCange('hendler')
   }

   return (
      <Card className="cost-item">
         <CostDate date={props.date} />
         
         <div>
            <div className="cost-item__description">
               <h2>{descriptionChange}</h2>
               <div className="cost-item__price">${props.price}</div>
            </div>
         </div>
         <button onClick={changeDescriptionHendler}>Change the discription</button>
      </Card>
   );
}

export default CostItem;


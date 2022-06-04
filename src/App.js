import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
const App = () => {
   const costs = [
      {
         date: new Date(2021, 2, 12),
         description: 'Холодильник',
         price: 900,
      },
      {
         date: new Date(2021, 8, 13),
         description: 'Iphone',
         price: 1200,
      },
      {
         date: new Date(2021, 10, 4),
         description: 'skirt',
         price: 30,
      },
   ];
   return (
      <div>
         <h1>Начнем изучение реакт</h1>
         <NewCost />
         <Costs costs={costs} />
      </div>
   );
}

export default App;

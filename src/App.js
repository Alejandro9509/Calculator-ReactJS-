
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const numbers = [
  [1 , 'one'], 
  [2 , 'two'], 
  [3 , 'tree'], 
  [4 , 'four'], 
  [5 , 'five'], 
  [6 , 'six'],
  [7 , 'seven'], 
  [8 , 'eight'],
  [9 , 'nine']
]

const  App = () =>  {
  return (
    <div className="app"> 
      <div className="formulaScreen">Formulas</div>
      <div className="outputScreen" id="display">Salida</div>
      <div id="outer">
         <div className="outer-left">
           <div className="item-flex big-horizontal"></div>
         </div>
         <div className="outer-right">
            <button id="multiply" className="item-flex">x</button>
            <button id="subtract" className="item-flex">-</button>
            <button id="add" className="item-flex">+</button>
            <button id="equals" className="item-flex big-vertical" >=</button>
         </div>
      </div>
    </div>
    
  );
}

export default App;

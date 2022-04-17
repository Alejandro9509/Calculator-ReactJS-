
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {useState } from 'react'

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
  
  const [current , setCurrent] = useState(0)
  const [temp, setTemp] = useState(false)
  const [operation, setOperation] = useState('')
  const [nop , setNop] = useState(1)
  const [isPut, setIsPut] = useState(false)

  const setttingValues = (value) => {
    
    if(operation !== ''){
      const newValue = ((temp * 10 ) + value) * nop
      setTemp(newValue)
    }else{
      const newValue = ((current * 10 ) + value) * nop
      setCurrent(newValue)
    }
    
  }

  const settingOperation = (value) => {

    setOperation(value)
  }

  const makeOperation = () => {
    if(operation === '' || temp == false){
      return
    }

    switch (operation){
    case 'x': 
      setCurrent( current * temp)
    case '+': 
      setCurrent( current + temp)
    case '-': 
      setCurrent( current - temp)
    case '/': 
      setCurrent( current / temp)

    }
    setOperation('')
    setTemp(false)
  }

  return (
    <div className="app"> 
      <div className="formulaScreen">Formulas</div>
      <div className="outputScreen" id="display">{(operation === '')? current: (operation !== '' && temp !== false )? temp: operation }</div>
      <div id="outer">
         <div className="outer-left">
           <button id="clear" className="item-flex big-horizontal">AC</button>
           <button id="divide" className="item-flex" >/</button>
           {
             numbers.map((it) => 
              <button onClick={() => setttingValues(it[0])} key={it[0]} id={it[1]} className="item-flex">{it[0]}</button>
             ).reverse()
           }
           <button onClick={() => setttingValues(0)} id="zero" className="item-flex big-horizontal">0</button>
           <button id="decimal" className="item-flex">.</button>
         </div>
         <div className="outer-right">
            <button onClick={() => settingOperation('x')} id="multiply" className="item-flex">x</button>
            <button onClick={() => settingOperation('-')} id="subtract" className="item-flex">-</button>
            <button onClick={() => settingOperation('+')} id="add" className="item-flex">+</button>
            <button onClick={() => makeOperation()} id="equals" className="item-flex big-vertical" >=</button>
         </div>
      </div>
    </div>
    
  );
}

export default App;

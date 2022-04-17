
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
const  App = () =>  {
  return (
    <div className="app"> 
      <div className="formulaScreen"></div>
      <div className="outputScreen" id="display"></div>
      <div id="outer">
         <div className="outer-left"></div>
         <div className="outer-right"></div>
      </div>
    </div>
    
  );
}

export default App;

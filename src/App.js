
import './App.scss';
import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 0,
			formula: "",
			operatorCount: 0
		}
		this.handleClear = this.handleClear.bind(this);
		this.handleEquals = this.handleEquals.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
	}

	handleClear() {
		this.setState({display: 0, formula: "", operatorCount: 0});
	}

	handleEquals() {	
		var formula = this.state.formula;
		const opCount = this.state.operatorCount;

		if(opCount > 0) {
			formula = formula.slice(0, formula.length-opCount);
		}
		if(formula[0] !== "+" && formula[0] !== "/" && formula[0] !== "*") {		
			var result = this.getResult(formula);
			const finalFormula = formula+"="+result;

			this.setState({
				display: result,
				formula: finalFormula 
			});
		}
	}

	getResult(formula)  {
		return new Function('return ' + formula) ();
	}

	handleDecimal() {
		var display = this.state.display;
		if(!display.includes(".")) {
			this.setState({
				formula: this.state.formula+".",
				display: this.state.display+"."
			})
		}
	}

	handleNumber(num) {
		var formula;
		var display = this.state.display;
		if(this.state.formula === "") {
			if(num > 0) {
				formula = num; 
				display = num;
			} else {
				return;
			}
		}
		else {
			formula = this.state.formula+num;

			if(this.state.operatorCount > 0) {
				display = num;
			} else {
				display = display+num;
			}
		}
		this.setState({formula, display, operatorCount: 0})
	}

	handleOperator(operator) {
		var formula = this.state.formula;
		var count = this.state.operatorCount;

		if(formula !== "") {		
			if(formula.includes("=")) {
				formula = this.state.display;
			} else {
				if(this.state.operatorCount === 1 && operator !=="-") {
					formula = formula.slice(0, formula.length-1);
					count = count-1;
				} 
				if(this.state.operatorCount > 1){
					formula = formula.slice(0, formula.length-2);
					count = count-2;
				}
			}
		}
		var result = formula+operator;
		count++;
		this.setState({
			formula: result, 
			display: operator, 
			operatorCount: count
		});
	}

	render() {
		return (
			<React.Fragment>
				<div id="container">
					<div id="display-section">
            <div id="formula">{this.state.formula}</div>
            <div id="display">{this.state.display}</div>
					</div>
          <div id="controls">
            <button value={"AC"} id={"clear"} onClick={this.handleClear} className="colSpan2 maroon">AC</button>
            <button value={"/"} id={"divide"} onClick={e => this.handleOperator(e.target.value)} className="lightGrey">/</button>
            <button value={"*"} id={"multiply"} onClick={e => this.handleOperator(e.target.value)} className="lightGrey">x</button>
            <button value={7} id={"seven"} onClick={e => this.handleNumber(e.target.value)} >7</button>
            <button value={8} id={"eight"} onClick={e => this.handleNumber(e.target.value)} >8</button>
            <button value={9} id={"nine"} onClick={e => this.handleNumber(e.target.value)} >9</button>
            <button value={"-"} id={"subtract"} onClick={e => this.handleOperator(e.target.value)} className="lightGrey" >-</button>
            <button value={4} id={"four"} onClick={e => this.handleNumber(e.target.value)} >4</button>
            <button value={5} id={"five"} onClick={e => this.handleNumber(e.target.value)} >5</button>
            <button value={6} id={"six"} onClick={e => this.handleNumber(e.target.value)} >6</button>
            <button value={"+"} id={"add"} onClick={e => this.handleOperator(e.target.value)} className="lightGrey">+</button>
            <button value={1} id={"one"} onClick={e => this.handleNumber(e.target.value)} >1</button>
            <button value={2} id={"two"} onClick={e => this.handleNumber(e.target.value)} >2</button>
            <button value={3} id={"three"} onClick={e => this.handleNumber(e.target.value)} >3</button>
            <button value={"="} id={"equals"} onClick={this.handleEquals} className="rowSpan2 blue">=</button>
            <button value={0} id={"zero"} onClick={e => this.handleNumber(e.target.value)} className="colSpan2">0</button>
            <button value={"."} id={"decimal"} onClick={this.handleDecimal} >.</button>
          </div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;

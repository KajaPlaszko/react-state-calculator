import { useState } from "react";

import "./App.css";

function App() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	const [leftNumber, setLeftNumber] = useState(0);
	const [rightNumber, setRightNumber] = useState(0);
	const [operatorObject, setOperatorObject] = useState("+");
  const [result, setResult] = useState(0);
  const [storedValue, setStoredValue] = useState(null);

	function handleLeftNumberClick(num) {
		setLeftNumber((prev) => parseInt(prev.toString() + num.toString(), 10));
	}
	function handleRightNumberClick(num) {
		setRightNumber((prev) =>
			parseInt(prev.toString() + num.toString(), 10)
		);
	}
	function handleOperatorObjectClick(operator) {
		setOperatorObject(operator);
	}

	function handleEqualsClick() {
    let res = 0;
    switch (operatorObject) {
      case "+":
        res = leftNumber + rightNumber;
        break;
      case "-":
        res = leftNumber - rightNumber;
        break;
      case "*":
        res = leftNumber * rightNumber;
        break;
      case "÷":
        res = rightNumber !== 0 ? leftNumber / rightNumber : "Error"; 
        break;
      default:
        res = 0;
        break;
    }
    setResult(res);
  }

	function handleClearRight() {
    setRightNumber(0);
  }

	function handleClearLeft() {
    setLeftNumber(0);
  }

  function handleStoreClick() {
    setStoredValue(result);
  }

  function handleRecallLeft () {
    if (storedValue !== null) {
      setLeftNumber(storedValue);
    }
  }

  function handleRecallRight() {
    if (storedValue !== null) {
      setRightNumber(storedValue);
    }
  }

	return (
		<div className="calculator">
			<div className="panel">
				<p>{leftNumber}</p>
				<div className="numbers">
					{numbers.map((num) => (
						<button
							key={num}
							onClick={() => handleLeftNumberClick(num)}
						>
							{num}
						</button>
					))}

					<button onClick={handleClearLeft}>Clear</button>
				</div>
        <button onClick={handleRecallLeft}>Recall</button>

			</div>

			<div className="panel">
				<p>{operatorObject}</p>
				<div className="numbers">
					{["+", "-", "*", "÷"].map((op) => (
						<button
							key={op}
							onClick={() => handleOperatorObjectClick(op)}
						>
							{op}
						</button>
					))}
				</div>
			</div>

			<div className="panel">
				<p>{rightNumber}</p>
				<div className="numbers">
					{numbers.map((num) => (
						<button
							key={num}
							onClick={() => handleRightNumberClick(num)}
						>
							{num}
						</button>
					))}

					<button onClick={handleClearRight}>Clear</button>
				</div>
        <button onClick={handleRecallRight}>Recall</button>

			</div>

			<div className="panel answer">
				<p>{result}</p>
				<div>
					<button onClick={handleEqualsClick}>=</button>
          <button onClick={handleStoreClick}>Store</button>
				</div>
			</div>
		</div>
	);
}

export default App;

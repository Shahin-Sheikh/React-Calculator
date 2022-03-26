import React, { useState } from 'react';
import './Calculator.css';
function Calculator() {
	const [result, setResult] = useState('');
	const showData = (e) => {
		setResult(result.concat(e.target.name));
	};
	const Ac = (e) => {
		setResult((e.target.name = ''));
	};
	const Percentage = (e) => {
		setResult(result / 100);
	};
	const Clear = () => {
		setResult(result.slice(0, -1));
	};
	const Calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (err) {
			setResult('Error');
		}
	};
	return (
		<div className="container">
			<form>
				<input type="text" value={result} readOnly />
			</form>
			<div className="keyPad">
				<button className="Ac" onClick={Ac}>
					AC
				</button>
				<button className="highlight" onClick={Clear}>
					Clear
				</button>
				<button name="%" onClick={Percentage}>
					%
				</button>
				<button name="/" onClick={showData}>
					÷
				</button>

				<button name="7" onClick={showData}>
					7
				</button>
				<button name="8" onClick={showData}>
					8
				</button>
				<button name="9" onClick={showData}>
					9
				</button>
				<button name="*" onClick={showData}>
					x
				</button>

				<button name="4" onClick={showData}>
					4
				</button>
				<button name="5" onClick={showData}>
					5
				</button>
				<button name="6" onClick={showData}>
					6
				</button>
				<button name="-" onClick={showData}>
					-
				</button>

				<button name="1" onClick={showData}>
					1
				</button>
				<button name="2" onClick={showData}>
					2
				</button>
				<button name="3" onClick={showData}>
					3
				</button>
				<button name="+" onClick={showData}>
					+
				</button>

				<button name="0" onClick={showData}>
					0
				</button>
				<button name="." onClick={showData}>
					.
				</button>
				<button className="highlight" onClick={Calculate} id="result">
					=
				</button>
			</div>
		</div>
	);
}

export default Calculator;

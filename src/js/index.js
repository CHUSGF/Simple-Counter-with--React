//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="clock">
				<i className="fas fa-clock"></i>
			</div>
			<div className="digitFour">{props.four}</div>
			<div className="digitThree">{props.three}</div>
			<div className="digitTWo">{props.two}</div>
			<div className="digitOne">{props.one}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	one: propTypes.number,
	two: propTypes.number,
	three: propTypes.number,
	four: propTypes.number,
};

//render your react application
let counter = 0;
setInterval(function () {
	const one = counter % 10;
	const two = Math.floor(counter / 10) % 10;
	const three = Math.floor(counter / 100) % 10;
	const four = Math.floor(counter / 1000) % 10;
	counter++;
	ReactDOM.render(
		<SecondsCounter one={one} two={two} three={three} four={four} />,
		document.querySelector("#app")
	);
}, 1000);

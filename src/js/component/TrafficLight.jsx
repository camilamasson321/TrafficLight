import React, { useState } from "react";

//include images into your bundle

//create your first component

const Light = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="trafficpole"></div>
			<div className="container d-flex justify-content-evenly flex-column align-items-center">
				<div
					className={`light red ${color === "red" ? "glow" : ""}`}
					onClick={() => setColor("red")}></div>
				<div
					className={`light yellow ${
						color === "yellow" ? "glow" : ""
					}`}
					onClick={() => setColor("yellow")}></div>
				<div
					className={`light green ${
						color === "green" ? "glow" : ""
					}`}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
};

export default Light;


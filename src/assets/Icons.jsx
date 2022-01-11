import React from "react";

function CloseBtnIcon(props) {
	return (
		<div className="close-btn" onClick={props.closeFn} style={{ width: '35px', height: '35px', position: 'absolute', top: '0', right: '0', cursor: 'pointer' }}>
			<svg
				viewBox="0,0 45,45"
				style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", padding: "30%", boxSizing: 'border-box' }}>
				<path strokeWidth='8' fill="none" stroke={props.color} d="M0 0 L45 45 M0 45 L45 0" />
			</svg>
		</div>
	);
}

export { CloseBtnIcon };
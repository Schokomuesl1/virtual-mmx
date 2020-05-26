import React, { useContext } from "react";
import { EditorContext } from "../contexts/EditorContext";

interface SubdivisionLineProps {
	tick: number;
}

export function SubdivisionLine({ tick }: SubdivisionLineProps) {
	const { height, tickToPixel } = useContext(EditorContext);
	const y = tickToPixel(tick);

	return (
		<g style={{ transform: `translateY(${y}px)` }}>
			<line x1={0} x2={height} stroke="#171717" />
		</g>
	);
}

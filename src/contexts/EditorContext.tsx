import React, { createContext, useState, useCallback } from "react";
import { NoteDivision, MarbleEvent } from "../core/types";

// this needs a serious rethink. Probably using useReducer
// currently, any more of less "global" state is being provided by this context
// it's clunky for now

type SubdivisionChecker = (tick: number) => number;
type SubdivisionCheckerKey = "realistic"; // TODO more

interface EditorContext {
	width: number;
	height: number;
	textColor: string;
	spacing: number;
	setSpacing: (newSpacing: number) => void;
	tpq: number;
	tickToPixel: (tick: number) => number;
	pixelToTick: (x: number) => number;
	channelToPixel: (channel: number) => number;
	pixelToChannel: (channel: number) => number;
	noteDivision: number;
	setNoteDivision: (newNoteDivision: number) => void;
	noteDivisions: { [type in NoteDivision]: number };
	marbleEvents: MarbleEvent[];
	setMarbleEvents: (newMarbleEvents: MarbleEvent[]) => void;
	showEmpties: boolean;
	setShowEmpties: (newShowEmpties: boolean) => void;
	subdivisionChecker: SubdivisionChecker;
	setSubdivisionChecker: (type: SubdivisionCheckerKey) => void;
}

export const EditorContext = createContext({} as EditorContext);

export default function EditorContextProvider(props: { children: any }) {
	const width = 500;
	const height = 500;
	const textColor = "gray";
	const [spacing, setSpacing] = useState(20); // pixels per quarter notes
	const tpq = 12; // ticks per quarter note
	const channelWidth = 40;
	const noteDivisions: { [type in NoteDivision]: number } = {
		quarter: tpq,
		eighth: tpq / 2,
		sixteenth: tpq / 4,
		triplet: (tpq * 2) / 3,
	};
	const [noteDivision, setNoteDivision] = useState(noteDivisions.quarter);
	const [showEmpties, setShowEmpties] = useState(true);

	const [marbleEvents, setMarbleEvents] = useState<MarbleEvent[]>([
		{ tick: 0, channel: 1 },
		{ tick: 12, channel: 2 },
		{ tick: 36, channel: 3 },
	]); // here for testing

	function tickToPixel(tick: number) {
		return (tick * spacing) / tpq;
	}
	function pixelToTick(x: number) {
		return (x / spacing) * tpq;
	}
	function channelToPixel(channel: number) {
		return channel * channelWidth;
	}
	function pixelToChannel(y: number) {
		return y / channelWidth;
	}

	const subdivisionCheckers: {
		[key in SubdivisionCheckerKey]: SubdivisionChecker;
	} = {
		realistic(tick: number) {
			if (tick % noteDivisions.eighth === 0) {
				return 0.5;
			} else if (tick % noteDivisions.sixteenth === 0) {
				return 0.1;
			} else if (tick % noteDivisions.triplet === 0) {
				return 0.9;
			}
			return 0;
		},
	};

	const [s, setSubdivisionChecker] = useState<SubdivisionCheckerKey>(
		"realistic"
	);
	const subdivisionChecker = useCallback(subdivisionCheckers[s], [
		noteDivision,
	]);

	return (
		<EditorContext.Provider
			value={{
				width,
				height,
				textColor,
				spacing,
				setSpacing,
				tpq,
				tickToPixel,
				pixelToTick,
				channelToPixel,
				pixelToChannel,
				noteDivision,
				noteDivisions,
				setNoteDivision,
				marbleEvents,
				setMarbleEvents,
				showEmpties,
				setShowEmpties,
				setSubdivisionChecker,
				subdivisionChecker,
			}}
		>
			{props.children}
		</EditorContext.Provider>
	);
}

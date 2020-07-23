import { VibraphoneState, VibraphoneChannel, Note } from "vmmx-schema";
import { AppStore } from "./app";
export declare class VibraphoneStore implements VibraphoneState {
    appStore: AppStore;
    vibratoEnabled: boolean;
    vibratoSpeed: number;
    notes: Record<VibraphoneChannel, Note>;
    barStores: Record<VibraphoneChannel, VibraphoneBarStore>;
    constructor(appStore: AppStore);
}
export declare class VibraphoneBarStore {
    notesObj: Record<VibraphoneChannel, Note>;
    bar: VibraphoneChannel;
    get note(): "B4" | "C5" | "D5" | "E5" | "F#5" | "G5" | "A5" | "B5" | "C6" | "D6" | "E6" | "C-1" | "C#-1" | "D-1" | "D#-1" | "E-1" | "F-1" | "F#-1" | "G-1" | "G#-1" | "A-1" | "A#-1" | "B-1" | "C0" | "C#0" | "D0" | "D#0" | "E0" | "F0" | "F#0" | "G0" | "G#0" | "A0" | "A#0" | "B0" | "C1" | "C#1" | "D1" | "D#1" | "E1" | "F1" | "F#1" | "G1" | "G#1" | "A1" | "A#1" | "B1" | "C2" | "C#2" | "D2" | "D#2" | "E2" | "F2" | "F#2" | "G2" | "G#2" | "A2" | "A#2" | "B2" | "C3" | "C#3" | "D3" | "D#3" | "E3" | "F3" | "F#3" | "G3" | "G#3" | "A3" | "A#3" | "B3" | "C4" | "C#4" | "D4" | "D#4" | "E4" | "F4" | "F#4" | "G4" | "G#4" | "A4" | "A#4" | "C#5" | "D#5" | "F5" | "G#5" | "A#5" | "C#6" | "D#6" | "F6" | "F#6" | "G6" | "G#6" | "A6" | "A#6" | "B6" | "C7" | "C#7" | "D7" | "D#7" | "E7" | "F7" | "F#7" | "G7" | "G#7" | "A7" | "A#7" | "B7" | "C8" | "C#8" | "D8" | "D#8" | "E8" | "F8" | "F#8" | "G8" | "G#8" | "A8" | "A#8" | "B8" | "C9" | "C#9" | "D9" | "D#9" | "E9" | "F9" | "F#9" | "G9";
    constructor(bar: VibraphoneChannel, notesObj: Record<VibraphoneChannel, Note>);
}

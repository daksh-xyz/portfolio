// store/stageAtom.ts
import { atom } from "jotai";

export type StageType = "locked" | "unlocked" | "video" | "art";

export const stageAtom = atom<StageType>("locked");
export const continueAtom = atom(false)

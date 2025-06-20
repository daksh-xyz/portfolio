// store/stageAtom.ts
import { atom } from "jotai";

export type StageType = "locked" | "unlocked" | "video" | "art";

type AppTitle = 'Recents' | 'Desktop' | 'Documents' | 'indiSign' | 'Fake News Detector' | 'YT Video Summariser' | '';

export const stageAtom = atom<StageType>("locked");
export const titleAtom = atom<AppTitle>("");
export const desktopFinderAtom = atom(false)

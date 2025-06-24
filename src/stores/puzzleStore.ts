import { create } from 'zustand'

interface PuzzleState {
    activePuzzleCode: string,
    puzzleData: {puzzle: {id: string | null}},
    setPuzzle: (code: string) => void
}

export const usePuzzleStore = create<PuzzleState>()((set) => ({
    activePuzzleCode: '',
    puzzleData: {puzzle: {id: null}},
    setPuzzle: (code: string) => {
        set(() => ({activePuzzleCode: code}))
    } }))
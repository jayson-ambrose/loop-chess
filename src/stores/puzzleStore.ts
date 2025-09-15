import { create } from 'zustand'

type PuzzleState = {
    puzzleData: {
        puzzle: {
            id?: string,
            solution?: string[]}},
    setPuzzle: (puzzle: object) => void
}

export const usePuzzleStore = create<PuzzleState>()((set) => ({
    puzzleData: {
        puzzle: {id: '', solution: []},
    },
    setPuzzle: (puzzle: object) => {
        try {
            set(() => ({puzzleData: {puzzle}}))}
        catch (error) {console.error("Error setting puzzle in store:", error)}            
    } }))
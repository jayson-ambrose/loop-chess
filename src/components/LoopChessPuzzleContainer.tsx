import PuzzleChessboard from "./PuzzleChessboard";
import PuzzleList from "./PuzzleList";
import { useChess } from "../hooks/useChess";
import { useLichessAPI } from "../hooks/useLichessAPI";
import { useEffect, useState } from "react";

export default function LoopChessPuzzleContainer () {

    const gameFunctions = useChess()
    const lichessAPI = useLichessAPI()

    const [currentPuzzle, setCurrentPuzzle] = useState<any>(null)
    const [puzzleFEN, setPuzzleFEN] = useState<string>('')

    const handleChangeCurrentPuzzle = async (puzzleCode: string) => {
        
        const puzzleData = await lichessAPI.fetchPuzzle(puzzleCode)
        const puzzleFEN = gameFunctions.parsePGN(puzzleData.game.pgn)
        setPuzzleFEN(puzzleFEN)
        setCurrentPuzzle(puzzleData)
    }

    useEffect(() => {
    }, [])

    return (
        <>
        <div className="flex flex-row">            
            <PuzzleChessboard position={puzzleFEN} puzzle={currentPuzzle}/>
            <PuzzleList handleChangeCurrentPuzzle={handleChangeCurrentPuzzle}/>
        </div>
        <button 
            className="border-2 rounded-lg bg-blue-400 text-white hover:bg-blue-200 w-24"
            onClick={() => {
                setCurrentPuzzle(currentPuzzle)
            }}>Reset</button>
        </>
        
    )
}
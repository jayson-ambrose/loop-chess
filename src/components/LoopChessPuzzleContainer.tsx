import PuzzleChessboard from "./PuzzleChessboard";
import PuzzleList from "./PuzzleList";
import { useChess } from "../hooks/useChess";
import { useLichessAPI } from "../hooks/useLichessAPI";
import { useEffect, useState } from "react";
import { usePuzzleStore } from "../stores/puzzleStore";

export default function LoopChessPuzzleContainer () {

    // testing code ////////////////////////

    const currentPuzzle = usePuzzleStore.getState().puzzleData.puzzle
    const setCurrentPuzzle = usePuzzleStore(state => state.setPuzzle)

    // testing code /////////////////////////

    const gameFunctions = useChess()
    const lichessAPI = useLichessAPI()

    const [puzzleFEN, setPuzzleFEN] = useState<string>('')
    const [turn, setTurn] = useState<string>('w')  

    useEffect(() => {
      if(puzzleFEN) {
        setTurn(gameFunctions.getTurn(puzzleFEN))
      }}, [puzzleFEN])    

    const handleChangeCurrentPuzzle = async (puzzleCode: string) => {
        
        const puzzleData = await lichessAPI.fetchPuzzle(puzzleCode)
        const puzzleFEN = gameFunctions.parsePGN(puzzleData.game.pgn)
        setPuzzleFEN(puzzleFEN)
        setCurrentPuzzle(puzzleData)
    }

    console.log(currentPuzzle)

    return (
        <>
        <div className="flex flex-row">            
            <PuzzleChessboard 
                position={puzzleFEN} 
                puzzle={currentPuzzle} 
                turn={turn === 'w' ? 'white' : 'black'}/>
            <PuzzleList handleChangeCurrentPuzzle={handleChangeCurrentPuzzle}/>
        </div>
        <button 
            className="border-2 rounded-lg bg-blue-400 text-white hover:bg-blue-200 w-24"
            onClick={() => {
                setCurrentPuzzle(currentPuzzle)
            }}>Reset</button>
        <h1>
            {turn === 'w' ? 'White to move' : 'Black to move'}
        </h1>
        </>
        
    )
}
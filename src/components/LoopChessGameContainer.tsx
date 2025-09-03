import PuzzleChessboard from "./PuzzleChessboard";
import PuzzleList from "./PuzzleList";
import { useChess } from "../hooks/useChess";
import { useEffect } from "react";

export default function LoopChessGameContainer () {

    const gameFunctions = useChess()

    useEffect(() => {
    }, [])

    return (
        <>
        <div className="flex flex-row">            
            <PuzzleChessboard position={null} puzzle={null}/>
            <PuzzleList/>
        </div>
        <button className="border-2 rounded-lg bg-blue-400 text-white hover:bg-blue-200 w-24">Start</button>
        </>
        
    )
}
import { Chessboard } from "react-chessboard";
import { useChess } from "../hooks/useChess";
import { useState } from "react";
import { Chess } from "chess.js";

export default function PuzzleChessboard ({ position }: 
    {
        puzzle: any, 
        position: any}) {

    const gameRules = useChess()
    const [puzzle, setPuzzle] = useState(()=> new Chess())
    
    const handleMove = (

      sourceSquare: string, 
      targetSquare: string,
      piece: string
      ) => {

        const move = {
          sourceSquare, targetSquare, piece
        }

      setPuzzle(gameRules.makeMove(move, puzzle))
      
      return true
    }

    return(
        <div className="h-148 w-148">
            <Chessboard
                onPieceDrop={(sourceSquare, targetSquare, piece) => 
                    handleMove(sourceSquare, targetSquare, piece) }
                position={puzzle.fen()} 
                animationDuration={50}/>
        </div>
    )
}


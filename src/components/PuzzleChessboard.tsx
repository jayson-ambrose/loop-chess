import { Chessboard } from "react-chessboard";
import { useChess } from "../hooks/useChess";
import { useState } from "react";
import { Chess } from "chess.js";

export default function PuzzleChessboard ({position=null, puzzle=null}: 
  {position: string | null, puzzle: any | null}) {

    const gameFunctions = useChess()
    const [board, setBoard] = useState(position ? new Chess(position) : new Chess())
    
    const handleMove = (

      sourceSquare: string, 
      targetSquare: string,
      piece: string
      ) => {

        const move = {
          sourceSquare, targetSquare, piece
        }

      setBoard(gameFunctions.makeMove(move, board))
      
      return true
    }

    return(
        <div className="h-148 w-148">
            <Chessboard
                onPieceDrop={(sourceSquare, targetSquare, piece) => 
                    handleMove(sourceSquare, targetSquare, piece) }
                position={board.fen()} 
                animationDuration={50}/>
        </div>
    )
}


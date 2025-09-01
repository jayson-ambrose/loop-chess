import { Chessboard } from "react-chessboard";
import { useChess } from "../hooks/useChess";
import { useState } from "react";
import { Chess } from "chess.js";

export default function PuzzleChessboard ({ position }: 
    {
        puzzle: any, 
        position: any}) {

    const gameRules = useChess()
    const [board, setBoard] = useState(()=> new Chess())
    
    const handleMove = (

      sourceSquare: string, 
      targetSquare: string,
      piece: string
      ) => {

        const move = {
          sourceSquare, targetSquare, piece
        }

      setBoard(gameRules.makeMove(move, board))
      
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


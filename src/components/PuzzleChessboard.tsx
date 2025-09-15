import { Chessboard } from "react-chessboard";
import { useChess } from "../hooks/useChess";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

export default function PuzzleChessboard ({
  position, 
  puzzle=null,
  turn='white'}: 
  {position: string, puzzle: any | null | undefined, turn: any}) {

    const gameFunctions = useChess()
    const [board, setBoard] = useState(new Chess())
    
    useEffect(() => {
      position ? setBoard(new Chess(position)) : setBoard(new Chess())
    }, [position])
    
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
                animationDuration={50}
                boardOrientation={turn}/>
        </div>
    )
}


import { Chessboard } from "react-chessboard";

export default function PuzzleChessboard ({ handleMove, position }: 
    {
        puzzle: any, 
        handleMove: Function,
        position: any}) {

    return(
        <div className="h-148 w-148">
            <Chessboard
                onPieceDrop={(sourceSquare, targetSquare, piece) => 
                    handleMove(sourceSquare, targetSquare, piece) }
                position={position} 
                animationDuration={50}/>
        </div>
    )
}


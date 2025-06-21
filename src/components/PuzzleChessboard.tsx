import { Chessboard } from "react-chessboard";

export default function PuzzleChessboard ({ puzzle, handleMove, position }: 
    {
        puzzle: any, 
        handleMove: Function,
        position: any}) {

    return(
        <div>
            <Chessboard
                onPieceDrop={(sourceSquare, targetSquare, piece) => 
                    handleMove(sourceSquare, targetSquare, piece) }
                position={position} 
                animationDuration={50}/>
        </div>
    )
}


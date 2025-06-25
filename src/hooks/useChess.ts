import { Chess } from "chess.js";

export function useChess() {

    const validateMove = (game: any, move: any) => {
        if(game.move(move) === null) {
            return false
        } else {return move}
    }
    
    const makeMove = (move:{sourceSquare: string, targetSquare: string, piece: string}, 
        game: { fen: Function}) => {

        const boardCopy = new Chess(game.fen())

        const moveAttributes: {
            from: string, to: string, promotion: string
        } = {
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: 'q' //auto promote to queen
        }

        validateMove(boardCopy, moveAttributes)
        
        return boardCopy

    }

    return {makeMove, validateMove}

}
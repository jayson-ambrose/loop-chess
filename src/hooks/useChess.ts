import { Chess } from "chess.js";
import { useLichessAPI } from "./useLichessAPI";

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

    const setBoardForPuzzle = (puzzle: any) => {
        if(puzzle === null) return new Chess()
        return new Chess(puzzle.game.fen)
    }

    const parsePGN = (pgn: string) => {
        const chess = new Chess()
        chess.loadPgn(pgn)
        return chess.fen()
        
    }

    return {makeMove, validateMove, parsePGN, setBoardForPuzzle}

}
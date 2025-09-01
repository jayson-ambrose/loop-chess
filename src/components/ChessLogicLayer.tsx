import {useState, useRef, useEffect } from 'react'
import { Chess } from "chess.js";
import PuzzleChessboard from './PuzzleChessboard';
import { useChess } from '../hooks/useChess';

export default function ChessLogicLayer () {
    // const puzzle = usePuzzleStore((state)=> state.puzzleData)
    // const setPuzzle = usePuzzleStore((state) => state.setPuzzle)

    const gameRules = useChess()

    const [puzzle, setPuzzle] = useState(() => new Chess())

    const [correctSequence, setCorrectSequence] = useState([])
    const [moveNumber, setMoveNumber] = useState(0)
    const puzzleRef = useRef(puzzle)

    useEffect(() => {
        puzzleRef.current = puzzle        
    }, [puzzle])

    const safePuzzleMutate = (gameModification: any) => {

        setPuzzle((g) => {
            const update = new Chess(g.fen())
            gameModification(update)
            return update
        })
    }

    // const validateMove = (move: any) => {
    //   if (move === null || (move.from+move.to) != correctSequence[moveNumber]) {
    //     return false
    //   } else { return move }    
    // }

    // const handleMove = (

    //   sourceSquare: string, 
    //   targetSquare: string,
    //   piece: string
    //   ) => {

    //     const puzzleCopy = new Chess(puzzle.fen())

    //     const moveAttributes : {
    //       from: string, to: string, promotion: any
    //     } = {
    //       from: sourceSquare,
    //       to: targetSquare,
    //       promotion: piece[0].toLowerCase() === 'p' ? 'q' : null          
    //     }

    //     const move = puzzleCopy.move(moveAttributes)

    //     if (!validateMove(move)) return false

    //     setPuzzle(puzzleCopy)
    //     moveForOpponent()        
    //     setMoveNumber(moveNumber+2)

    //     return true

    // }

    const handleMove = (
      sourceSquare: string, 
      targetSquare: string,
      piece: string
      ) => {

        const move = {
          sourceSquare, targetSquare, piece
        }

      setPuzzle(gameRules.makeMove(move, puzzle))  
    }

    const moveForOpponent = () => {
      const currentPuzzle = puzzleRef.current
      const newMoveNumber = moveNumber + 1
      const possibleMoves = currentPuzzle.moves({verbose: true})
      if (currentPuzzle.isGameOver() || 
      currentPuzzle.isDraw() || 
      possibleMoves.length === 0 ||
      newMoveNumber >= correctSequence.length){
        return 
      } else {
        safePuzzleMutate((puzzle: any) => {
          puzzle.move(correctSequence[newMoveNumber])
        })
      }
    }

    const loadNewPuzzle = () => {

      setMoveNumber(0)

      fetch('https://lichess.org/api/puzzle/d16v9')
      .then(resp => resp.json())
      .then(data => {
        safePuzzleMutate((puzzle: any) => {
          puzzle.loadPgn(data.game.pgn)
        })
        setCorrectSequence(data.puzzle.solution)
        console.log(data)
      })
    }

    console.log(puzzle)

    return (
      <div>
        <PuzzleChessboard 
          puzzle={null} 
          handleMove={handleMove} 
          position={puzzle.fen()} />
        <button onClick={() => loadNewPuzzle()}>
          TEST
        </button>
      </div>
    )


}
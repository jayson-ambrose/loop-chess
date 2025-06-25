import { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function ChessboardSample() {
  const [game, setGame] = useState(new Chess());
  const gameRef = useRef(game); // Use a ref to hold the current game instance
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>()

  // Update the ref whenever the game state changes
  useEffect(() => {
    gameRef.current = game;
    getStartingFEN()
  }, [game]);

  function safeGameMutate(gameFunction: any) {
    setGame(g => {
      const update = new Chess(g.fen());
      gameFunction(update);
      return update;
    });
  }

  // Modified makeRandomMove to use the ref for the current game state
  function makeRandomMove() {
    const currentGame = gameRef.current; // Access the current game instance from the ref

    const possibleMoves = currentGame.moves({ verbose: true });

    if (currentGame.isGameOver() || currentGame.isDraw() || possibleMoves.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const randomMove = possibleMoves[randomIndex];

    // Use safeGameMutate to update the state
    safeGameMutate(g => {
      g.move({
        from: randomMove.from,
        to: randomMove.to,
        promotion: randomMove.promotion || 'q'
      });
    });
  }

  function onDrop(sourceSquare, targetSquare, piece) {
    // Create a new Chess object instance from the current game's FEN
    const gameCopy = new Chess(game.fen());

    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() === 'p' ? 'q' : undefined
    });

    // illegal move
    if (move === null) return false;

    // Update the game state FIRST
    setGame(gameCopy);

    // Clear any existing timeout to prevent multiple random moves
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }

    // Schedule the computer's move AFTER the player's move has been processed
    // and the state potentially updated.
    const newTimeout = setTimeout(makeRandomMove, 200);
    setCurrentTimeout(newTimeout);

    return true;
  }

  return (
    <div>
      <Chessboard
        id="PlayVsRandom"
        position={game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
        }}
      />
      <button onClick={() => {
        safeGameMutate(game => {
          game.loadPgn("e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qh4 Qe2 dxc6 g3 Qe7 Bg2 Be6 O-O O-O-O Nc3 Nf6 Bg5 h6 Be3 Bb6 a4 Bg4 f3 Be6 a5 Bxe3+ Qxe3 Kb8 f4 Bc4 Rfe1 Ng4 Qf3 h5 b4 Rd2 Ne2 Rxc2 h3 Nf6 Nd4 Rd2");
        });
        clearTimeout(currentTimeout); // Clear timeout on reset
      }}>
        reset
      </button>
      <button onClick={() => {
        safeGameMutate(game => {
          game.undo();
        });
        clearTimeout(currentTimeout); // Clear timeout on undo
      }}>
        undo
      </button>
    </div>
  );
}
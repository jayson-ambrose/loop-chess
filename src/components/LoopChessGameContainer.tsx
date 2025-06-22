import ChessLogicLayer from "./ChessLogicLayer";
import PuzzleList from "./PuzzleList";

export default function LoopChessGameContainer () {

    return (
        <div className="flex flex-row">            
            <ChessLogicLayer/>
            <PuzzleList/>
        </div>
    )
}
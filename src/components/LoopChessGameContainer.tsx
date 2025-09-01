import PuzzleChessboard from "./PuzzleChessboard";
import PuzzleList from "./PuzzleList";

export default function LoopChessGameContainer () {

    return (
        <div className="flex flex-row">            
            <PuzzleChessboard position={null} puzzle={null}/>
            <PuzzleList/>
        </div>
    )
}
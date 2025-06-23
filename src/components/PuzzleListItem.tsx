export default function PuzzleListItem ({ puzzleCode, activePuzzle=false } : {
    puzzleCode: string,
    activePuzzle?: boolean }) {

    return (
        <>
        <h1 className={`cursor-pointer select-none`}>{puzzleCode}</h1>
        </>
    )
}
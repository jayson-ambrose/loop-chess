export default function PuzzleListItem ({ puzzleCode, handleChangeCurrentPuzzle } : {
    puzzleCode: string,
    activePuzzle?: boolean
    handleChangeCurrentPuzzle: (puzzleCode: string) => void}) {

    return (
        <>
        <h1 onClick={()=> {
            handleChangeCurrentPuzzle(puzzleCode)
        }} className={`cursor-pointer select-none`}>{puzzleCode}</h1>
        </>
    )
}
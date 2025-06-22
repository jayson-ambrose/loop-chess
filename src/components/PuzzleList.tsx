import { useState } from "react"
import PuzzleListBuilder from "./PuzzleListBuilder"
import PuzzleListItem from "./PuzzleListItem"

export default function PuzzleList () {

    const [mappedPuzzles, setMappedPuzzles] = useState([])

    const handleMapPuzzles = (text: string) => {
        setMappedPuzzles(text.split(',', 10))
    }

    console.log(mappedPuzzles)

    const displayPuzzles = mappedPuzzles.map((puzzle) => <PuzzleListItem key={puzzle} puzzleCode={puzzle}/>)

    return (
        <div className="flex flex-col">
            <PuzzleListBuilder handleMapPuzzles={handleMapPuzzles}/>
            {displayPuzzles}
        </div>
    )
}
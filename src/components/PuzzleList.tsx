import { useState } from "react"
import PuzzleListBuilder from "./PuzzleListBuilder"
import PuzzleListItem from "./PuzzleListItem"

export default function PuzzleList () {

    const [mappedPuzzles, setMappedPuzzles] = useState<string[]>([])

    const handleMapPuzzles = (text: string) => {
        const result: string[] = text.split(',', 10)
        setMappedPuzzles(result)
    }

    const displayPuzzles = mappedPuzzles.map((puzzle) => {
        return <PuzzleListItem key={puzzle} puzzleCode={puzzle}/>})

    return (
        <div className="flex flex-col">
            <PuzzleListBuilder handleMapPuzzles={handleMapPuzzles}/>
            {displayPuzzles}
        </div>
    )
}
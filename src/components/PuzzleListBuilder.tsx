import { useState, type ChangeEvent } from "react"

export default function PuzzleListBuilder ({ handleMapPuzzles }: {handleMapPuzzles: Function}) {

    const [textValue, setTextValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value)
    }

    return(
        <>
        <textarea 
            rows={3} 
            value={textValue}
            placeholder="Enter up to 10 puzzle codes delineated by commas..." 
            className="border-2 border-slate-400 resize-none w-148 rounded-lg p-1" 
            onChange={(e) => handleChange(e)}/>
        <button 
            className="border-2 rounded-lg bg-blue-400 text-white hover:bg-blue-200"
            onClick={() => {handleMapPuzzles(textValue)}}>
            List Em
        </button>
        </>
    )
}
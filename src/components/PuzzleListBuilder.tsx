import { useState, type ChangeEvent } from "react"

export default function PuzzleListBuilder () {

    const [textValue, setTextValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value)
    }

    console.log(textValue)

    return(

        <textarea 
        rows={3} 
        value={textValue}
        placeholder="Enter up to 10 puzzle codes delineated by commas..." 
        className="border-2 border-slate-400 resize-none w-148 rounded-lg p-1" 
        onChange={(e) => handleChange(e)}/>
    )
}
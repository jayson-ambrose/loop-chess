export function useLichessAPI () {

    const fetchPuzzle = async (puzzleCode: string) => {

        let puzzle: any = null

        await fetch(`https://lichess.org/api/puzzle/${puzzleCode}`)
        .then(resp => resp.json())
        .then(data => {
            puzzle = data
        })

        return puzzle
    }

    return {fetchPuzzle}
}


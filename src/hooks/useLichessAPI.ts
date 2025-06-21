export default function useLichessAPI () {

    const fetchPuzzle = async () => {

        let puzzle: any = null

        await fetch('https://lichess.org/api/puzzle/gKRuX')
        .then(resp => resp.json())
        .then(data => {
            puzzle = data
        })

        return puzzle
    }

    return {fetchPuzzle}
}


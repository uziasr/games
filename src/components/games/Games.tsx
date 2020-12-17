import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import Game from "./index"
import GameCard from "./GameCard"
import "./index.css"

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean; // props is optional if ?
    i: number;
    fn: (bob: string) => string;
    obj: {
        f1: string
    },
    person: Person;
}

const Games: React.FC = ({ }) => {

    const [loadByHundred, setLoadByHundred] = useState<number>(100)
    const [games, setGame] = useState<Game[]>([])
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // axios.get<Game[]>('api/games', { headers: { 'Content-Type': 'application/json' } })
        //     .then(res => setGame(res.data))
        //     .catch(err => console.log(err))
    }, [])

    const loadGames = (): Game[] => {
        return games.slice(0, loadByHundred)
    }

    const incrementLoad = (): void => {
        setLoadByHundred(loadByHundred + 100)
    }

    return (
        <>
            <input ref={inputRef} onChange={(event: React.ChangeEvent<HTMLInputElement>) => 1} />
            <div className="gameCardWrap">
                {loadGames().map<React.FunctionComponentElement<any>>(game => <GameCard key={game.id} {...game} />)}
            </div>
            <button onClick={incrementLoad}>View More</button>
        </>
    )
}

export default Games
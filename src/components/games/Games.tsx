import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios"
import Game from "./index"
import GameCard from "./GameCard"
import TextField from '@material-ui/core/TextField';
import "./index.css"

const Games: React.FC = ({ }) => {

    const [loadPerPage, setLoadPerPage] = useState<number>(24)
    const [games, setGame] = useState<Game[]>([])
    const inputRef = useRef<HTMLInputElement>(null);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const TotalPages: number = Math.ceil(games.length / loadPerPage)

    useEffect(() => {
        // axios.get<Game[]>('api/games', { headers: { 'Content-Type': 'application/json' } })
        //     .then(res => setGame(res.data))
        //     .catch(err => console.log(err))
    }, [])

    const loadGames = (): Game[] => {
        return games.slice((currentPage - 1) * loadPerPage, loadPerPage * currentPage)
    }

    return (
        <>
            {/* <input ref={inputRef} onChange={(event: React.ChangeEvent<HTMLInputElement>) => 1} /> */}
            <div className="inputFilterWrap">
                <TextField style={{width:"80%"}} id="outlined-basic" label="Search By Name" variant="outlined" />
            </div>
            <div className="gameCardWrap">
                {loadGames().map<React.FunctionComponentElement<any>>(game => <GameCard key={game.id} {...game} />)}
            </div>
            <div className="paginationWrap">
                <Pagination count={TotalPages} onChange={(event: React.ChangeEvent<unknown>, page: number) => { setCurrentPage(page) }} variant="outlined" shape="rounded" />
            </div>
        </>
    )
}

export default Games
import React, { useState, useEffect } from "react"
import Pagination from '@material-ui/lab/Pagination';
// import axios from "axios"
import GameFilterDialogue from "./GameFilterDialogue"
import { Game, gamesArr } from "./index"
import GameCard from "./GameCard"
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./index.css"

const Games: React.FC = () => {

    const [loadPerPage] = useState<number>(24)
    const [games, setGame] = useState<Game[]>([])
    const [filteredGames, setFilteredGames] = useState<Game[]>(gamesArr)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [open, setOpen] = useState<boolean>(false)
    const TotalPages: number = Math.ceil(filteredGames.length === 0 ? games.length / loadPerPage : filteredGames.length / loadPerPage)
    const [filterInput, setFilterInput] = useState<string>("")

    // useEffect(() => {
    //     axios.get<Game[]>(`${process.env.REACT_APP_API_DOMAIN ||'' }api/games`, { headers: { 'Content-Type': 'application/json' } })
    //         .then(res => setGame(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    const loadGames = (): Game[] => {
        let gamesArr: Game[] = filteredGames.length === 0 ? games.slice((currentPage - 1) * loadPerPage, loadPerPage * currentPage) : filteredGames.slice((currentPage - 1) * loadPerPage, loadPerPage * currentPage)
        return gamesArr.filter(game => (
            (RegExp(new RegExp(filterInput.toLowerCase())).test(game.title.toLowerCase()))
        ))
    }

    const openFilters = (): void => {
        setOpen(true)
    }

    const applyFilters = (obj: { [key: string]: boolean }): void => {
        setFilteredGames((): Game[] => (
            games.filter(game => obj[game.genre.trim()])
        ))
        setCurrentPage(1)
    }

    return (
        <>
            <div className="inputFilterWrap">
                <TextField
                    style={{ width: "40%" }}
                    id="outlined-basic"
                    label="Search By Name"
                    variant="outlined"
                    value={filterInput}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFilterInput(event.target.value) }}
                />
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={openFilters}
                    color={open ? "primary" : "inherit"}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="gameCardWrap">
                {loadGames().map<React.FunctionComponentElement<any>>(game => <GameCard key={game.id} {...game} />)}
            </div>
            <div className="paginationWrap">
                <Pagination count={TotalPages} onChange={(event: React.ChangeEvent<unknown>, page: number) => { setCurrentPage(page) }} variant="outlined" shape="rounded" />
            </div>
            <GameFilterDialogue open={open} setOpen={setOpen} applyFilters={applyFilters} />
        </>
    )
}

export default Games
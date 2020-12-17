import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import tileData from "./genreData"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
            height: 450,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

interface Genre {
    "MMORPG": boolean;
    "Shooter": boolean;
    "MMO": boolean;
    "Social": boolean;
    "Card Game": boolean;
    "MOBA": boolean;
    "Fighting": boolean;
    "Strategy": boolean;
    "Racing": boolean;
    "Sports": boolean;
    "Fantasy": boolean;
    "Battle Royale": boolean;
}


const TitlebarGridList: React.FC = () => {
    const classes = useStyles();
    const [genreHash, setGenreHash] = useState<Genre>({
        "MMORPG": true,
        "Shooter": true,
        "MMO": true,
        "Social": true,
        "Card Game": true,
        "MOBA": true,
        "Fighting": true,
        "Strategy": true,
        "Racing": true,
        "Sports": true,
        "Fantasy": true,
        "Battle Royale": true,
    })

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Genres</ListSubheader>
                </GridListTile>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            actionIcon={
                                <IconButton onClick={() => setGenreHash({ ...genreHash, [tile.title]: !genreHash[tile.title] })} aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <AddCircleIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default TitlebarGridList

const genres: string[] = ["MMORPG", "Shooter", "MMO", "Social", "Card Game", "MOBA", "Fighting", "Strategy", "Racing", "Sports", "Fantasy", " MMORPG", "Battle Royale"]
const platoform: string[] = ["PC (Windows)", "Web Browser"]
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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

interface Prop {
    genreHash: { [key: string]: boolean };
    setGenreHash: (obj: { [key: string]: boolean }) => void
}


const TitlebarGridList: React.FC<Prop> = (props) => {
    const { genreHash, setGenreHash } = props
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Genres</ListSubheader>
                </GridListTile>
                {tileData.map((tile, i) => (
                    <GridListTile key={`${tile.img}${i}`}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            actionIcon={
                                <IconButton onClick={() => setGenreHash({ ...genreHash, [tile.title]: !genreHash[tile.title] })} aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <AddCircleIcon color={genreHash[tile.title] ? "primary": "inherit" } />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default TitlebarGridList;
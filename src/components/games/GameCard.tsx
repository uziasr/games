import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Game } from "./index"

const useStyles = makeStyles({
    root: {
        width: 345,
        margin: "20px"
    },
    media: {
        height: 140,
    },
});

const GameCard: React.FC<Game> = (game) => {
    const classes = useStyles();

    const learnMoreLink = (title: string): string => {
        const baseUrl = `https://www.google.com/search?&q=`
        return baseUrl + title.split(" ").join("+")
    }

    return (
        <Card className={classes.root}>
            <CardActionArea href={game.game_url}>
                <CardMedia
                    className={classes.media}
                    image={game.thumbnail}
                    title={game.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {game.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {game.short_description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a style={{ color: "#3f51b5", textDecoration: "none" }} href={game.game_url}>Play</a>
                </Button>
                <Button size="small" color="primary">
                    <a style={{ color: "#3f51b5", textDecoration: "none" }} href={game.freetogame_profile_url}>Review</a>
                </Button>
                <Button size="small" color="primary">
                    <a style={{ color: "#3f51b5", textDecoration: "none" }} href={learnMoreLink(game.title)}>Google</a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default GameCard
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import GenreGridList from "./GenreGridList"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: 'fit-content',
        },
        formControl: {
            marginTop: theme.spacing(2),
            minWidth: 120,
        },
        formControlLabel: {
            marginTop: theme.spacing(1),
        },
    }),
);

interface Mount {
    open: boolean;
    setOpen: (open: boolean) => void;
    applyFilters: (obj: { [key: string]: boolean }) => void;
}

interface GenreFormat {
    [key: string]: boolean;
}

const MaxWidthDialog: React.FC<Mount> = (props) => {
    const classes = useStyles();
    const { open, setOpen, applyFilters } = props;
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('xs');

    const handleClose = (): void => {
        setOpen(false);
    };

    const [genreHash, setGenreHash] = React.useState<GenreFormat>({
        "MMORPG": false,
        "Shooter": false,
        "MMO": false,
        "Social": false,
        "Card Game": false,
        "MOBA": false,
        "Fighting": false,
        "Strategy": false,
        "Racing": false,
        "Sports": false,
        "Fantasy": false,
        "Battle Royale": false,
    })

    const applyButton = ():void =>{
        applyFilters(genreHash)
        handleClose()
    }

    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Filter By Genre</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select up to however you want!
                    </DialogContentText>
                    <GenreGridList genreHash={genreHash} setGenreHash={setGenreHash} />
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose} color="primary">
                        Close
          </Button> */}
                    <Button onClick={applyButton} variant={"contained"} color="primary">
                        Apply
          </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default MaxWidthDialog
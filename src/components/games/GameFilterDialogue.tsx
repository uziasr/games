import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GenreGridList from "./GenreGridList"

interface Mount {
    open: boolean;
    setOpen: (open: boolean) => void;
    applyFilters: (obj: { [key: string]: boolean }) => void;
}

interface GenreFormat {
    [key: string]: boolean;
}

const MaxWidthDialog: React.FC<Mount> = (props) => {
    const { open, setOpen, applyFilters } = props;
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState<DialogProps['maxWidth']>('xs');

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

    const applyButton = (): void => {
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
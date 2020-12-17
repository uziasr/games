interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}
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

export default Game
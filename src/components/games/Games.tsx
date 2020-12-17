import React, { useState, useEffect, useRef } from "react"


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
// const Games: React.FC<Props> = () => {

const Games: React.FC = ({}) => {

    const [count, setCount] = useState<number | null>(5)
    const inputRef = useRef<HTMLInputElement>(null);


    return ( 
        <>
        <input ref={inputRef} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>1}/>
        </>
    )
}

export default Games
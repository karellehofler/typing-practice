import React, { useState, useEffect } from 'react';
import faker from 'faker';
import useKeyPress from '../../hooks/useKeyPress';

export default function Session() {

    const [ incorrect, setIncorrect ] = useState(0);
    const random = generateWords(10);
    var i = 0;

    useKeyPress(key => {
        if(key != random.charAt(i)) {
            console.log('Incorrect key typed');
        } else {
            console.log(`${key} == ${random.charAt(i)}`);
            i++;
            console.log(i);
        }
    }, []);
   
    return (
        <>
            {random}
            <button>Start</button>
            <button>Stop</button>
            <input type="text" />
        </>
    )
}
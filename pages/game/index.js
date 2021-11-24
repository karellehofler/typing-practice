import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { generate } from '@/utils/generate';
import useKeyPress from '@/hooks/useKeyPress';

const words = generate(500);
const time = 60;

export default function Game() {

    const [ time, setTime ] = useState(60);
    const [ incorrect, setIncorrect ] = useState(0);
    const [ wordsTyped, setWordsTyped ] = useState(0);
    const [ currentWordPos, setCurrentWordPos ] = useState(0)
    const [ word, setWord ] = useState(words[currentWordPos].split(""));
    const [ currentChar, setCurrentChar ] = useState({
        position: 0, character: word.at(0) });

    const goToFirstChar = () => {
        return ({
            position: 0,
            character: word.at(0)
        })
    }

    const goToNextChar = () => {
      var nextChar = currentChar.position + 1;
      
      return { 
        position: nextChar, 
        character: word.at(nextChar)
      }
    }
    
    const increment = (prev) => { return prev += 1 }; 

    var newWord = (prev) => words[prev + 1].split("");

    useKeyPress(key => {
        if(currentChar.position === word.length-1) {
            console.log("new word loading");
            setCurrentChar({...currentChar, 
            position: 0, character: word.at(0) });
            setCurrentWordPos(prev => prev += 1);
            setWord(words[currentWordPos].split(""));
            setWordsTyped(prev => prev + 1);
            // return;
        } else {
            console.log(`key pressed: ${key}`);
        
            // if(key === "Backspace" || key === "Delete") {
            //     return goToPrevChar();
            // }
    
            if(key !== currentChar.character) {
                setIncorrect(increment);
            }
    
            if(currentChar.character === " ") {
                setWordsTyped(increment);
            }
    
            setCurrentChar(goToNextChar);
        }
    });

    useEffect(() => {
        console.log(`Current word: ${word}. wordsTyped: ${wordsTyped}`);
        if(currentChar.position === word.length-1) setCurrentChar(...currentChar, goToFirstChar);
    }, [word])

    return (
        <>
            <Head>
                <title>Typing Game</title>
            </Head>
            <main id="gaming-session">
                <div id="words-gaming">
                    {word ? word.map((char, index) => (
                        <span id={index} key={index} 
                            className={index === currentChar.position ? "current-char" : null}>
                        {char}
                        </span>
                    )) : null } 
                </div>
            </main>
        </>
    )
}
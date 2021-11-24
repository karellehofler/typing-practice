import React, { useState, useEffect} from 'react';
import Head from 'next/head'
import { generate } from '../../utils/generate';
import useKeyPress
 from '@/hooks/useKeyPress';

//generate words and characters
// const words = generate(10);
// const chars = Array.from(words);

export default function TypingDisplayInput({ ...props }) {
  
    /**
     * Intial State of this page
     * currentChar - starts at 0 and increases everytime the user triggers a key press event
     * incorrect - starts at 0 and increases if the user key press does not match the current character state
     * wordsTyped - this is used to track how many words the user has typed and is
     * increased when the current character is a space key
     */
    // const [ currentChar, setCurrentChar ] = useState({ position: 0, character: words.at(0) });
    // const [ incorrect, setIncorrect ] = useState(0);
    // const [ wordsTyped, setWordsTyped ] = useState(0);
    
    // let currentDiv = React.createRef();

    // const goToNextChar = () => {
    //   var nextChar = currentChar.position + 1;
      
    //   return { 
    //     position: nextChar, 
    //     character: words.at(nextChar)
    //   }
    // }

    // const handleClassChange = (className) => {
    //   return currentDiv.current.classList.add(className);
    // }
  
    // const goToPrevChar = () => {
    //   var prevChar = currentChar.position - 1;
      
    //   return { 
    //     position: prevChar, 
    //     character: chars.at(prevChar)
    //   }
    // }
    
    const increment = (prev) => {
      return prev += 1; 
    }
      // const increaseIncorrect = () => setIncorrect(prev => prev += 1);
      // const increaseWordCount = (prev) => {
      //   // setWordsTyped(prev => prev += 1);
      //   return prev += 1
      // }
    
    useKeyPress(key => {

        console.log(`key pressed: ${key}`);
        
        if(key === "Backspace" || key === "Delete") {
            return goToPrevChar();
        }

        if(key !== currentChar.character) {
            setIncorrect(increment);
            // handleClassChange("incorrect");
        } 
        // else {
          // handleClassChange("correct");
        // }

        if(currentChar.character === " ") {
            setWordsTyped(increment);
        }
        setCurrentChar(goToNextChar);
    });
      

    return (
        <>
        <div className="typing-content">
          {/* {chars.map((char, index) => ( */}
              {/* // <span id={index}  */}
              {/* // key={index}  */}
              {/* // className={index === currentChar.position ? "current-char" : null}> */}
              {/* {char} */}
              {/* {index == currentChar.position && <div className="caret" style={{ height: "10px", width: "10px", background: "blue" }}></div> } */}
              {/* </span> */}
          {/* // ))}  */}
        </div>
        </>
    )
}
//formats the time to double digits for minutes and seconds
const doubleDigitFormatting = (num) => {
    return num > 9 ? num : `0${num}`;
}

//gets the total minutes and seconds remaining 
//as the timer is counting down
export const formatTime = (time) => {
    
    const minutes = doubleDigitFormatting(Math.floor(time / 60));
    const seconds = doubleDigitFormatting(Math.floor(time % 60));
    
    return `${minutes}:${seconds}`;
}

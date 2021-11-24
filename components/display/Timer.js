import React from 'react';
import { formatTime } from '@/utils/formatTime';

export default function Timer({ timeInSeconds }) {

    return (
        <>
          <div id="timer" className="bg-blue-800 w-500 h-500">
            <p>{formatTime(timeInSeconds)}</p>
        </div>  
        </>
    )
}
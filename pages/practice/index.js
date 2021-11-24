import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
const TypingDisplayInput = dynamic(() => import ("@/components/display/TypingDisplayInput"));
const Timer = dynamic(() => import ("@/components/display/Timer"));

export default function Practice() {
    
    return (
        <>
            <Head>
                <title>Practice Typing</title>
            </Head>
            <main id="typing-practice-session"> 
                <div id="user-banner"></div>
                <div className="session flex flex-row md:flex-col-reverse">
                    <div id="typing-input" className="w-1/2">
                        <TypingDisplayInput />
                    </div>
                    <div id="timer-container" className="w-1/2">
                        <Timer timeInSeconds={60} />
                    </div>
                </div>
            </main>
        </>
    )
}
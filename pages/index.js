import Head from 'next/head'
import Link from 'next/link';

export default function Home() {

  return (
    <>
    <Head>
      <title>Typing Practice and Games</title>
    </Head>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header>
        <h1 className="text-blue-500">Take a Typing Test</h1>        
      </header>
      <div className="flex flex-row w-full space-x-4">
        <div className="w-1/2 bg-">

          <h3>Typing Game</h3>
          <p>Try to type as many words as possible in under 1 minute</p>
          <Link href="/game">Go</Link>
        </div>
        <div className="w-1/2">
          <h3>Traditional Typing Test</h3>
          <p>Type out a short story in under a minute to find
            your WPM.
          </p>
          <Link href="/practice">Go</Link>
        </div>
      </div>
    </div>
    </>
  )
}

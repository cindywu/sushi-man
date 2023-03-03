"use client"
import React, { useState, useEffect, useRef } from 'react'
import {nanoid} from 'nanoid'

export default function Sushi({menu}: any) {
  const [playing, setPlaying] = useState(false)

  return (
    <>
      {!playing ?
        <MenuPage
          menu={menu}
          setPlaying={setPlaying}
          playing={playing}
        />
        :
        <PlayPage
          menu={menu}
        />
      }
    </>
  )
}

function PlayPage({menu}: any){
  const [randomItem, setRandomItem] = useState(null)
  const [showWrong, setShowWrong] = useState(false)
  const [showTrue, setShowTrue] = useState(false)
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * menu.length))
  const [score, setScore] = useState(0)
  const [gameLog, setGameLog] = useState([])

  useEffect(() => {
    console.log({gameLog})

  }, [gameLog])

  useEffect(() => {
    setRandomItem(menu[randomIndex])
  },[])

  useEffect(() => {
    setRandomItem(menu[randomIndex])
  }, [randomIndex])

  const guessRef = useRef(null)

  function checkIfGuessEqualsPrice(){
    const guess = parseFloat(guessRef.current.value)
    const price = randomItem.price

    console.log({guess})
    console.log({price})
    if (guess !== price){
      setShowWrong(true)
      setShowTrue(false)
      setGameLog([...gameLog, {id: nanoid(), name: randomItem.name, guess: guess, correct: false}])
      guessRef.current.value = null
    } else {
      setShowWrong(false)
      setShowTrue(true)
      setRandomIndex(Math.floor(Math.random() * menu.length))
      console.log("i am in here")
      setGameLog([...gameLog, {id: nanoid(), name: randomItem.name, guess: guess, correct: true}])
      setScore(score + 1)
      guessRef.current.value = null
    }
  }

  return (
    <>
    <div className={'p-4 font-mono flex justify-between w-1/2 cursor-pointer'}><div>score: {score}</div><div className={'text-white hover:text-black'} onClick={() => {setScore(0); setGameLog([]);}}>reset</div></div>
    <div className={'p-4 font-mono w-1/2 flex justify-between'}>
      <div>{menu[randomIndex].name}</div>
      <input
        className={"border-2 w-24 px-2 font-mono outline-none"}
        ref={guessRef}
        onKeyUp={(e) => {e.keyCode === 13 && checkIfGuessEqualsPrice()}}
      ></input>
      <button onClick={() => checkIfGuessEqualsPrice()}>enter</button>
    </div>
    <div className={'p-4 font-mono'}>
      {gameLog.map((item: any) => {
        return (
          <div
            key={item.id}
            className={"flex justify-between w-1/2"}
          >
            <div>{item.name}</div>
            <div className={`${item.correct ?
              'text-lime-600' : 'text-rose-600'}`}>{item.guess}</div>
          </div>
        )
      })}

    </div>
    </>
  )
}

function MenuPage({menu, setPlaying, playing}:any){
  return (
    <div className={'p-4 font-mono w-1/2'}>
      <div className={'pb-4 flex justify-between'}>
        <div>welcome to your sushi shift</div>
        <div
          className={'text-orange-600 hover:text-orange-700 cursor-pointer'}
          onClick={() => setPlaying(!playing)}
        >
          start work</div>
      </div>
      {menu.map((item: any) => {
        return (
          <div
            key={item.id}
            className={"flex justify-between"}
          >
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}

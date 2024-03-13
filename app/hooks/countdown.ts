import { useEffect, useState } from "react"

export const useTimer = () => {
  const [seconds, setSeconds] = useState(600)
  
  useEffect(() => {
    if (seconds <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [seconds])

  const setTimer = (value:number) => setSeconds(value)

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const timer = `${minutes}:${String(remainingSeconds).padStart(2, '0')} `;

  return {minutes,remainingSeconds,setTimer,timer}
}
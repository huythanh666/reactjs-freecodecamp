import { useEffect, useState } from 'react';
function OtpGenerator() {
  let [number,setNumber] = useState()
  let [countDown,setCountdown] = useState()
  function handleRenderRandomNumber(){
    setNumber(Math.floor(Math.random() * 1000000 + 1))
    setCountdown(5)
  }
  const isDisabled = countDown > 0
 useEffect(()=>{
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1)
    },1000)
    if(countDown == 0) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  },[countDown])

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      {number ? <h2 id="otp-display">{number}</h2> :<h2 id="otp-display">Click 'Generate OTP' to get a code</h2>}
      {countDown === 0 ? <p aria-live="polite" id="otp-timer">OTP expired. Click the button to generate a new OTP.</p> : number ? <p aria-live="polite" id="otp-timer">Expires in: {countDown} seconds</p> : <p aria-live="polite" id="otp-timer"></p>}
      <button disabled={isDisabled} onClick={handleRenderRandomNumber} id="generate-otp-button">Generate OTP</button>
    </div>
  )
}

export default OtpGenerator

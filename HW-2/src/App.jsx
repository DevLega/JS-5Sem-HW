import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting';
import Button from './components/Button';
import Message from './components/Message';

function App() {
  const name = "Олег";
  const text = "Повідомлення";
  const handleClick = () => {
    alert(text);
  }

  return (
    <>
      <div>
        <Greeting name={name}/>
        <Message text={text}/>
        <Button onClick={handleClick}/>
      </div>
    </>
  )
}

export default App

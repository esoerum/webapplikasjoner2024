import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Streaks from './components/Streaks'
import Welcome from './components/Welcome'
import React from "react"

function App() {
  console.log('Console log i App');

  const name = "Alfred";
  const age = 20;

  return (
    <React.Fragment>
      <Welcome name={name} age={age + 1} />
      <Streaks streaks={20} />
    </React.Fragment>
  );
}

export default App;

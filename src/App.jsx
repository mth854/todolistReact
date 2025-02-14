import React,{useState,} from 'react'
import RandomColor from './components/randomcolor/randomColor'
import Click from './components/cliker/click'
import './index.css'
function App() {
  return (
    <body>
      <h1>get some color</h1>
    <RandomColor/>
      <h1> a click game</h1>
    <Click/>
    </body>
  )
}
export default App
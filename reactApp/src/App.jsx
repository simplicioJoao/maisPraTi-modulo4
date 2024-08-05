import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [text, textList] = useState(0)
  const texts = [
    ["React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"],
    ["Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"],
    ["Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"],
    ["Vanilla JavaScript requires imperative programming",
      "Imperative Programming: You define all the steps needed to achieve a result",
      "React on the other hand embraces declarative programming",
      "With React, you define the goal and React figures out how to get there"]
  ]

  return (
    <>
      <header>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div className="card">
        <button onClick={() => textList(0)}>Why React?</button>
        <button onClick={() => textList(1)}>Core Features</button>
        <button onClick={() => textList(2)}>Related Resources</button>
        <button onClick={() => textList(3)}>React vs JS</button>
      </div>

      <ul>
        {texts[text].map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </>
  )
}

export default App

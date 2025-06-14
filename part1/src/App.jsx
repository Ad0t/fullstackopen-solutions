import './App.css'
import { createElement } from 'react'

// Practice 4
const Hello = () => {
  return (
    <div>
      <p>Hello duniya!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App
  
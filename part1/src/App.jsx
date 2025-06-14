import './App.css'
import { createElement } from 'react'

// Practice 4
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Jesus'/>
      <Hello name='By Adele'/>
      <Hello name='Anthony'/>
    </div>
  )
}

export default App
  
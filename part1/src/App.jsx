import './App.css'
import { createElement } from 'react'

// Practice 3
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return createElement(
    'div',
    null,
    createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
export default App
  
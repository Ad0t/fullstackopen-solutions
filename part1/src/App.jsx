import './App.css'

// Practice 4
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>I am {props.name} {props.sname} of {props.age} years</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/Ad0t'>Ad0t</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  const friends2 = [ 'Peter', 'Man']

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends2}</p>
    </div>
  )
}

export default App
  
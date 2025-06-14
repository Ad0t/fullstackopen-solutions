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
const Hello2 = (props) => {
  console.log(props)
  return (
    <div>
      <p>Your friendly neighborhood {props.name} {props.sname}</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const sname = "Parker"
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} sname='Man' age={age + 8}/>
      <Hello2 name='Spider' sname={sname}/>
    </div>
  )
}

export default App
  
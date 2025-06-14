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

const App1 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <footer />
    </div>
  )
}

// removing the div tag returns error. Alternative: Array of the components
const App2 = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}

// Using Fragments <></>
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App
  
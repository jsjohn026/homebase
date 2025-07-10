import { useState } from 'react'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [ days, setDays ] = useState(5)

  const name = 'Jasmine'

  return (
    <div>
      <h1>Welcome home!</h1>
      <Hello name={name} />
      <p>You have {counter} work orders in progress.</p>
      <p>Rent is due in {days} days</p>
    </div>
  )
}

export default App

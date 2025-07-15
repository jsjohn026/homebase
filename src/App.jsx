import { useState } from 'react'
import Header from './components/Header'
import AddWorkOrder from './components/AddWorkOrder'

const Hello = (props) => {
  console.log(props)
  return (
    <div  className='header' >
      <h3>Hello {props.name}, welcome home!</h3>
    </div>
  )
}

const App = () => {
  const [ orderCount, setOrderCount ] = useState(0)
  // const [ days, setDays ] = useState(5)

  const name = 'Jasmine'
  const days = 5

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    setOrderCount(orderCount + 1)
  }

  return (
    <div className='container'>
      <Header name={name} />
      <Hello name={name} />
      
      <p>You have {orderCount} work orders in progress.</p>
      <p>Rent is due in {days} days</p>

      <AddWorkOrder handleSubmit={handleSubmit} />

      <h3>Current Work Orders:</h3>
      <ul>
        <li>Sample order A</li>
      </ul>
    </div>
  )
}

export default App

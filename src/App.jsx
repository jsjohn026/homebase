import { useState } from 'react'
import Header from './components/Header'

const Hello = (props) => {
  console.log(props)
  return (
    <div  className='header' >
      <h3>Hello {props.name}, welcome home!</h3>
    </div>
  )
}

const WorkOrderForm = (props) => {
  return (
    <div className='container' >
      <h3>Need a repair? Submit a work order here:</h3>
      <form className='add-form' method="post" onSubmit={props.handleSubmit}>

        <div className='form-control' >
          <label>Repair</label>
          <input type="text" placeholder='Request for repair' name="order" />
          <input type="text" placeholder='Additional notes' name="additionalNotes" />          
          <input type="text" placeholder='Name of person submitting request' name="submittedBy" />
          <input type="email" placeholder='Email' name="email" />
          <input type="date" name="dateAdded" />
        </div>

        <input type="submit" className='btn btn-block' name='submitBtn' value="Submit" />
      </form>
    </div>
  )
}

const App = () => {
  const [ orderCount, setOrderCount ] = useState(0)
  const [ days, setDays ] = useState(5)

  const name = 'Jasmine'

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

      <WorkOrderForm handleSubmit={handleSubmit} />

      <h3>Current Work Orders:</h3>
      <ul>
        <li>Sample order A</li>
      </ul>
    </div>
  )
}

export default App

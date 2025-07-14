import { useState } from 'react'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const WorkOrderForm = (props) => {
  return (
    <div>
      <h3>Need a repair? Submit a work order here:</h3>
      <form method="post" onSubmit={props.handleSubmit}>
        <input type="text" placeholder='Request for repair' name="order" />
        <input type="text" placeholder='additional notes' name="additionalNotes" />
        <input type="date" name="dateAdded" />
        <input type="text" placeholder='Name of person submitting request' name="submittedBy" />
        <input type="email" placeholder='email' name="email" />
        <input type="submit" name='submitBtn' value="submit" />
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
    <div>
      <h1>Welcome home!</h1>
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

import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import AddWorkOrder from './components/AddWorkOrder'
import WorkOrders from './components/WorkOrders'

const Hello = (props) => {
  return (
    <div  className='header' >
      <h3>Hello {props.name}, welcome home!</h3>
    </div>
  )
}

const App = () => {
  const [orders, setOrders] = useState([])
  // const [days, setDays] = useState(5)

  const name = 'Jasmine'
  const days = 5

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3005/api/orders')
      .then(response => {
        console.log('promise fulfilled')
        console.log('this is the response:', response.data)
        setOrders(response.data)
      })
  }, [])

  console.log('render', orders.length, 'orders')

  const addOrder = (props) => {
    const newOrderObject = {
      issue: props.issue,
      notes: props.notes,
      submittedBy: props.submitter, 
      submitterEmail: props.email,
      dateSubmitted: props.date
    }

    axios
      .post('http://localhost:3005/api/orders', newOrderObject)
      .then(response => {
        setOrders(prevOrders => [...prevOrders, response.data])
      })
    }

  return (
    <div className='container'>
      <Header />
      <Hello name={name} />
      
      <p>You have {orders.length} work orders in progress.</p>
      <p>Rent is due in {days} days</p>

      <AddWorkOrder onAdd={addOrder} />
      <WorkOrders orders={orders} />
    </div>
  )
}

export default App

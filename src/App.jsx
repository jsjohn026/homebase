import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import AddWorkOrder from './components/AddWorkOrder'
import WorkOrders from './components/WorkOrders'

const Hello = ({ name, numOrders, days}) => {
  return (
    <div  className='header' >
      <h4>Hello {name}, welcome home!</h4>
        <div>
          <p>You have {numOrders} work orders in progress.</p>
          <p>Rent is due in {days} days</p>
        </div>
    </div>
  )
}

const App = () => {
  const [showAddButton, setShowAddButton] = useState(false)
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

  const deleteOrder = (id) => {
    axios
      .delete(`http://localhost:3005/api/orders/${id}`)
      .then(response => {
        setOrders(orders.filter((order) => order.id !== id))
        console.log('Work order deleted successfully', response.data)
      })
      .catch(error => {
        console.log('Error deleting work order', error)
      })
  }

  const toggleCompletion = (id) => {
    setOrders(orders.map((order) => order.id === id ? { ...order, completed: !order.completed } : order ))
  }

  return (
    <div className='container'>
      <div className='app-overlay'/>
      <div className='app-content'>
        <Header onAdd={() => setShowAddButton(!showAddButton)} />
        {/* <Hello name={name} numOrders={orders.length} days={days} /> */}
        {showAddButton && <AddWorkOrder onAdd={addOrder} />}
        {orders.length > 0 ? 
          <WorkOrders 
            orders={orders} 
            onDelete={deleteOrder} 
            onToggle={toggleCompletion}
          />
          : 'No work orders to show'
        }
      </div>
    </div>
  )
}

export default App

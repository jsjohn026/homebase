import { useState, useEffect } from 'react'
import Header from '../components/Header'
import AddWorkOrder from '../components/AddWorkOrder'
import WorkOrders from '../components/WorkOrders'
import orderService from '../services/orders'

const Home = () => {
  const [showAddButton, setShowAddButton] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    orderService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        console.log('this is the response:', response.data)
        setOrders(response.data)
      })
  }, [])

  console.log('render', orders.length, 'orders')

  const toggleCompletion = (id) => {
    const orderToToggle = orders.find((order) => order.id === id)
    const updatedOrder = { ...orderToToggle, completed: !orderToToggle.completed }

    orderService
      .update(id, updatedOrder)
      .then(response => {
        setOrders(orders.map((order) => 
          order.id === id ? response.data : order 
        ))
      })
      .catch(error => {
        console.log('Error updating order', error)
      })
  }
  
  const addOrder = (props) => {
    const newOrderObject = {
      issue: props.issue,
      notes: props.notes,
      submittedBy: props.submitter, 
      submitterEmail: props.email,
      dateSubmitted: props.date
    }

    orderService
      .create(newOrderObject)
      .then(response => {
        setOrders(prevOrders => [...prevOrders, response.data])
      })
      .catch(error => {
        console.log('Error adding work order', error)
      })
  }

  const deleteOrder = (id) => {
    orderService
      .remove(id)
      .then(response => {
        setOrders(orders.filter((order) => order.id !== id))
        console.log('Work order deleted successfully', response.data)
      })
      .catch(error => {
        console.log('Error deleting work order', error)
      })
  }


  return (
    <div className='container'>
      <div className='app-overlay'/>
      <div className='app-content'>
        <Header 
          onAdd={() => setShowAddButton(!showAddButton)} 
          showAddForm={showAddButton} 
        />
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

export default Home
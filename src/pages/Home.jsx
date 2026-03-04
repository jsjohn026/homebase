import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Header from '../components/Header'
import AddWorkOrder from '../components/AddWorkOrder'
import WorkOrders from '../components/WorkOrders'
import orderService from '../services/orders'
import authService from '../services/auth'

const Home = () => {
  const navigate = useNavigate()
  const { username } = useOutletContext()
  const [showAddButton, setShowAddButton] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (username) {
      toast(`Hello ${username}`, { position: 'top-right' })
    }
  }, [username])

  useEffect(() => {
    if (username) {
      orderService
        .getAll()
        .then(response => {
          console.log('promise fulfilled')
          console.log('this is the response:', response.data)
          setOrders(response.data)
        })
        .catch(error => {
          console.log('Error fetching orders:', error)
          toast.error('Failed to load orders', {
            position: 'bottom-left'
          })
        })
    }
  }, [username])

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
        toast.error('Failed to update order', {
          position: 'bottom-left'
        })
      })
  }
  
  const addOrder = (formData) => {
    orderService
      .create(formData)
      .then(response => {
        setOrders(prevOrders => [...prevOrders, response.data])
        toast.success('Order added successfully', {
          position: 'bottom-right'
        })
      })
      .catch(error => {
        console.log('Error adding work order', error)
        toast.error('Failed to add order', {
          position: 'bottom-left'
        })
      })
  }

  const deleteOrder = (id) => {
    orderService
      .remove(id)
      .then(response => {
        setOrders(orders.filter((order) => order.id !== id))
        console.log('Work order deleted successfully', response.data)
        toast.success('Order deleted successfully', {
          position: 'bottom-right'
        })
      })
      .catch(error => {
        console.log('Error deleting work order', error)
        toast.error('Failed to delete order', {
          position: 'bottom-left'
        })
      })
  }

  const handleLogout = async () => {
    try {
      await authService.logout()
      toast.success('Logged out successfully', {
        position: 'bottom-right'
      })
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (error) {
      console.log('Logout error', error)
      toast.error('Logout failed', {
        position: 'bottom-left'
      })
    }
  }


  return (
    <div className='container'>
      <div className='app-overlay'/>
      <div className='app-content'>
        <Header 
          onAdd={() => setShowAddButton(!showAddButton)} 
          showAddForm={showAddButton}
          username={username}
          onLogout={handleLogout} 
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
      <ToastContainer />
    </div>
  )
}

export default Home
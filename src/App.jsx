import { useState } from 'react'
import Header from './components/Header'
import AddWorkOrder from './components/AddWorkOrder'
import WorkOrders from './components/WorkOrders'

const Hello = (props) => {
  console.log(props)
  return (
    <div  className='header' >
      <h3>Hello {props.name}, welcome home!</h3>
    </div>
  )
}

const App = (props) => {
  const [orders, setOrders] = useState(props.orders)
  const [orderCount, setOrderCount] = useState(0)
  // const [days, setDays] = useState(5)

  const name = 'Jasmine'
  const days = 5

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(e.target)
    setOrderCount(orderCount + 1)


    setOrders(orders.concat())
  }

  return (
    <div className='container'>
      <Header />
      <Hello name={name} />
      
      <p>You have {orders.length} work orders in progress.</p>
      <p>Rent is due in {days} days</p>

      <AddWorkOrder handleSubmit={handleSubmit} />
      <WorkOrders orders={orders} />
    </div>
  )
}

export default App

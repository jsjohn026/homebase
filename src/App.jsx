import { Route, Routes } from 'react-router-dom'
import { Login, Signup, Home } from './pages'


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
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App

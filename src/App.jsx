import { Route, Routes } from 'react-router-dom'
import { Login, Signup, Home, WorkOrderDetail } from './pages'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/orders/:id' element={<WorkOrderDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

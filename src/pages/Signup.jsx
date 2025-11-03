import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='form_container'>
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            name='email' 
            value={email}
            placeholder='Enter your email'
            onChange={handleOnChange}
          />
        </div>
      </form>
    </div>
  )
}

export default Signup
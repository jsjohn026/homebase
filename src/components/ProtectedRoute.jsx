import { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authService } from '../services/auth'

const ProtectedRoute = () => {
  const [username, setUsername] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await authService.verify()
        if (data.status) {
          setUsername(data.user)
        } else {
          setUsername(null)
        }
      } catch {
        setUsername(null)
      } finally {
        setLoading(false)
      }
    }
    verifyCookie()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!username) return <Navigate to='/login' replace />
  return <Outlet context={{ username }} />
}

export default ProtectedRoute
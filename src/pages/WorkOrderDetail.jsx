import { useState, useEffect } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import orderService from '../services/orders'

const WorkOrderDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  // const { username } = useOutletContext()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    orderService.getById(id)
      .then(response => {
        setOrder(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error fetching order: ', error)
        toast.error('Failed to load order', { position: 'bottom-left' })
        setLoading(false)
      })
  },[id])

  const handleDelete = () => {
    orderService.remove(id)
      .then(() => {
        toast.success('Order deleted', { position: 'bottom-right' })
        setTimeout(() => navigate('/'), 1000)
      })
      .catch(error => {
        console.log('Error deleting order: ', error)
        toast.error('Failed to delete order', { position: 'bottom-left' })
      })
  }

  if (loading) return <div>Loading...</div>
  if (!order) return <div>Order not found</div>

  return (
    <div className="container">
      <div className="app-overlay" />
      <div className="app-content">
        <button className='btn' onClick={() => navigate('/')}>← Back</button>
        <h2>Work Order Detail</h2>

        <div>
          <p><strong>Issue:</strong> {order.issue}</p>
          <p><strong>Notes:</strong> {order.notes}</p>
          <p><strong>Submitted By:</strong> {order.submittedBy}</p>
          <p><strong>Email:</strong> {order.submitterEmail}</p>
          <p><strong>Date:</strong> {new Date(order.dateSubmitted).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {order.completed ? 'Completed' : 'In Progress'}</p>
        </div>

        {order.attachments?.length > 0 && (
          <div>
            <h3>Attachments</h3>
            {order.attachments.map((attachment, i) => (
              <div key={i}>
                <a href={attachment.url} target='_blank' rel='noreferrer'>{attachment.filename}</a>
              </div>
            ))}
          </div>
        )}

        <div>
          <button className='btn' onClick={() => navigate(`/orders/${id}/edit`)}>Edit</button>
          <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default WorkOrderDetail
import { useState, useEffect } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { FaWrench, FaUser, FaPaperclip, FaHourglassStart, FaCheckCircle } from 'react-icons/fa'
import orderService from '../services/orders'
import dayjs from '../utils/dayjs'

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
  
  const formattedDate = dayjs(order.dateSubmitted).format('MMMM Do [at] h:mma')
  
  return (
    <div className="container">
      <div className="app-overlay" />
      <div className="app-content">
        <button className='btn' onClick={() => navigate('/')}>← Back</button>
        <h2>{order.issue}</h2>

        <div className={`detail-card ${order.completed ? 'completed': 'in-progress'}`}>

          <div className={`status-text ${order.completed ? 'completed': 'in-progress'}`}>
            {order.completed 
              ? <><FaCheckCircle /> Completed</>
              : <><FaHourglassStart /> In Progress</>
            }
          </div>

          <div className="detail-field">
            <FaWrench className='detail-icon' />
            <span className="detail-field-value">{order.notes}</span>
          </div>

          <span className="detail-submitted">
            Submitted by {order.submittedBy} on {formattedDate}
          </span>

          <div className="detail-person">
            <FaUser className='detail-icon' />
            <span>{order.submittedBy}</span>
          </div>

        </div>

        {order.attachments?.length > 0 && (
          <div className='attachments-section'>
            <FaPaperclip className='attachment-icon' />
            <div className="attachment-tiles">
              {order.attachments.map((attachment, i) => (
                <a
                  key={i}
                  href={attachment.url} 
                  target='_blank' 
                  rel='noreferrer'
                  className='attachment-tile'
                >
                  {attachment.filename}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className='detail-actions'>
          <button className='btn' onClick={() => navigate(`/orders/${id}/edit`)}>Edit</button>
          <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default WorkOrderDetail
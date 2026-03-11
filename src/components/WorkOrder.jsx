import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { FaTimes, FaPaperclip , FaComment } from 'react-icons/fa'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

dayjs.extend(advancedFormat)

const WorkOrder = ({ order, onDelete, onToggle }) => {
  const formattedDate = dayjs(order.dateSubmitted).format('MMMM Do [at] h:mma')
  const navigate = useNavigate()
  const clickTimer = useRef(null)

  const handleClick = () => {
    clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => {
      navigate(`/orders/${order.id}`)
    }, 250)
  }

  const handleDoubleClick = () => {
    clearTimeout(clickTimer.current)
    onToggle(order.id)
  }

  return (
    <div 
      className={`task ${order.completed ? 'reminder' : '' }`} 
      onDoubleClick={handleDoubleClick} 
      onClick={handleClick}
    >
      <h3>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {order.issue} 
          {order.attachments?.length > 0 && (
            <FaPaperclip style={{ color: 'gray' }}/>
          )}
          {order.comments?.length > 0 && (
            <FaComment style={{ color: 'gray' }} />
          )}
        </span>
        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={(e) => {
            e.stopPropagation()
            onDelete(order.id)
          }} 
        />
      </h3>
      <p>submitted {formattedDate}</p>
    </div>
  )
}

export default WorkOrder
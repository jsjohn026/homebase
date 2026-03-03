import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { FaTimes, FaPaperclip } from 'react-icons/fa'

dayjs.extend(advancedFormat)

const WorkOrder = ({ order, onDelete, onToggle }) => {
  const formattedDate = dayjs(order.dateSubmitted).format('MMMM Do [at] h:mma')

  return (
    <div className={`task ${order.completed ? 'reminder' : '' }`} onDoubleClick={() => onToggle(order.id)} >
      <h3>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {order.issue} 
          {order.attachments && order.attachments.length > 0 && (
            <FaPaperclip style={{ color: 'gray' }}/>
          )}
        </span>
        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={() => onDelete(order.id)} 
        />
      </h3>
      <p>submitted {formattedDate}</p>
    </div>
  )
}

export default WorkOrder
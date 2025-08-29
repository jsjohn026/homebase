import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { FaTimes } from 'react-icons/fa'

dayjs.extend(advancedFormat)

const WorkOrder = ({ order, onDelete, onToggle }) => {
  const formattedDate = dayjs(order.dateSubmitted).format('MMMM Do [at] h:mma')

  return (
    <div className={`task ${order.completed ? 'reminder' : '' }`} onDoubleClick={() => onToggle(order.id)} >
      <h3>
        {order.issue} 

        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={() => onDelete(order.id)} 
        />
      </h3>
      <p>submitted {formattedDate}</p>
      {/* <button onClick={toggleCompletion}>{}x</button> */}
    </div>
  )
}

export default WorkOrder
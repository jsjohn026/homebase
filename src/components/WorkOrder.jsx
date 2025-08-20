import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

const WorkOrder = ({ order }) => {
  // const toggleCompletion = () => {}
  const formattedDate = dayjs(order.dateSubmitted).format('MMMM Do [at] h:mma')

  return (
    <div className='task' >
      <h3>{order.issue}</h3>
      <p>submitted {formattedDate}</p>
      {/* <button onClick={toggleCompletion}>{}x</button> */}
    </div>
  )
}

export default WorkOrder
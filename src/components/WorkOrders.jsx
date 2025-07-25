import WorkOrder from './WorkOrder'

const WorkOrders = ({ orders }) => {
  return (
    <div>
      <h3>Current Work Orders:</h3>
      <ul>
      {orders.map(order => 
        <WorkOrder key={order.id} order={order} />
      )}
      </ul>
    </div>
  )
}

export default WorkOrders
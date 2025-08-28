import WorkOrder from './WorkOrder'

const WorkOrders = ({ orders, onDelete }) => {
  return (
    <>
      {orders.map(order => 
        <WorkOrder key={order.id} order={order} onDelete={onDelete} />
      )}
    </>
  )
}

export default WorkOrders
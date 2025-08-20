import WorkOrder from './WorkOrder'

const WorkOrders = ({ orders }) => {
  return (
    <>
      {orders.map(order => 
        <WorkOrder key={order.id} order={order} />
      )}
    </>
  )
}

export default WorkOrders
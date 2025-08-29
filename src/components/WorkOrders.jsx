import WorkOrder from './WorkOrder'

const WorkOrders = ({ orders, onDelete, onToggle }) => {
  return (
    <>
      {orders.map(order => 
        <WorkOrder 
          key={order.id} 
          order={order} 
          onDelete={onDelete} 
          onToggle={onToggle}
        />
      )}
    </>
  )
}

export default WorkOrders
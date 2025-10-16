import WorkOrder from './WorkOrder'

const WorkOrders = ({ orders, onDelete, onToggle }) => {
  return (
    <>
      <h4>Work Orders: </h4>
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
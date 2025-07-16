const WorkOrders = ({ orders }) => {
  return (
    <div>
      <h3>Current Work Orders:</h3>
      <ul>
      {orders.map(order => 
        <li key={order.id}>
          {order.repair}
        </li>
      )}
      </ul>
    </div>
  )
}

export default WorkOrders
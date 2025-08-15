import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const orders = [
  {
    id: 1, 
    repair: "kitchen faucet is leaking", 
    notes: "leak is a slow drip even when faucet is off",
    name: "Super Tenant",
    email: "supertenant@email.com",
    date: "07/14/2025"
  },
  {
    id: 2, 
    repair: "window is broken", 
    notes: "in the master bedroom",
    name: "Super Tenant",
    email: "supertenant@email.com",
    date: "07/14/2025"
  },
  {
    id: 3, 
    repair: "missing roof shingles", 
    notes: "from recent storm",
    name: "Landlord",
    email: "landord@email.com",
    date: "07/16/2025"
  },
]

// ReactDOM.createRoot(document.getElementById('root')).render(<App orders={orders} />)
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

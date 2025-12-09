import Button from './Button'
import logo from '/images/white-high-res-logo-transparent.png'

const Header = ({ onAdd, showAddForm, username, onLogout }) => {
  return (
    <header className='header'>
      <img src={logo} className='logo' alt="Homebase logo" />
      <h1>Work Orders</h1>
      {username && <p>Welcome, {username}!</p>}

      <Button 
        color={showAddForm ? 'red' : 'green'} 
        text={showAddForm ? 'Close' : 'Add'} 
        onClick={onAdd} 
      />
      {username && (
        <Button 
          color='gray'
          text='Logout'
          onClick={onLogout}
        />
      )}
    </header>
  )
}

export default Header
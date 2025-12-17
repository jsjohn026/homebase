import Button from './Button'
import logo from '/images/white-high-res-logo-transparent.png'

const Header = ({ onAdd, showAddForm, username, onLogout }) => {
  return (
    <header className='header'>
      <div className="header-top">
        <img src={logo} className='logo' alt="Homebase logo" />
        {username && (
          <Button 
            color='gray'
            text='Logout'
            onClick={onLogout}
          />
        )}
      </div>
      
      <h1>{username && <p>Welcome, {username}!</p>}</h1>

      <Button 
        color={showAddForm ? 'red' : 'green'} 
        text={showAddForm ? 'Close' : 'Add'} 
        onClick={onAdd} 
      />
    </header>
  )
}

export default Header
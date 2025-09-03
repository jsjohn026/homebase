import Button from './Button'
import logo from '/images/white-high-res-logo-transparent.png'

const Header = ({ onAdd }) => {
  return (
    <header className='header'>
      <img src={logo} className='logo' alt="Homebase logo" />
      <Button color='green' text='Add' onClick={onAdd} />
    </header>
  )
}

export default Header
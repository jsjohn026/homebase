import Button from './Button'
import logo from '/images/white-high-res-logo-transparent.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} className='logo' alt="Homebase logo" />
      {/* <h1>HomeBase</h1> */}
      <Button color='green' text='Add'/>
    </header>
  )
}

export default Header
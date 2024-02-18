import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            Logo
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/counter'>Counter</Link>
            </li>
            <li>
              <Link to='/weather'>Weather</Link>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </>
  )
}

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/counter'>Counter</Link>
            </li>
            <li>
              <a href='/weather'>Weather</a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </>
  )
}

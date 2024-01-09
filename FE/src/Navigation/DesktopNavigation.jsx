import './Desktop.css'
import { Link, NavLink } from 'react-router-dom';

const DesktopNavigation = () => {
 
  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <Link to='/'>
            <span > Etibet - Service,Solution,Support</span>
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items">
          <li className="nav-links">
                <NavLink to="/">
                  <span className='nav-icon-span'>E-Store</span>
                </NavLink>
            </li>

            <li className="nav-links">
                <NavLink to="/cart">
                  <span className='nav-icon-span'>Services</span>
                </NavLink>
            </li>
            <li className="nav-links">
                <NavLink to="/wishlist">
                  <span className='nav-icon-span'>Wallet</span>
                </NavLink>
            </li>
            <li className="nav-links">
                <NavLink to="/deals">
                  <span className='nav-icon-span'>Deals</span>
                </NavLink>
            </li>
            <li className="nav-links">
                <NavLink to="/ads">
                  <span className='nav-icon-span'>Ads</span>
                </NavLink>
            </li>
            <li className="nav-links cs">
                <NavLink to="/custonmersupport">
                  <span className='nav-icon-span'>Customer Support</span>
                </NavLink>
            </li>

            
          </ul>
        </div>
      </nav >
    </>

  )
}

export default DesktopNavigation
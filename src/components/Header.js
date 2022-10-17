import './Header.css'
import { FaReact as ReactLogo } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'
import { useCartStore } from '../store/useCartStore'
import {usePersistCartStore} from '../store/usePersistCartStore'

const Header = () => {
  const numItems = useCartStore((state) => state.numItems)
  const cartItems = useCartStore((state) => state.items)

  const numItemsPersist = usePersistCartStore((state) => state.numItems)
  const cartItemsPersist = usePersistCartStore((state) => state.items)
  
  return (
    <header className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logotype'>
            <ReactLogo className='icon-logo'/>
            <h1>Zustand Tutorial</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li>
              <div style={style.cartBox} onClick={() => {alert(JSON.stringify(cartItems))}}>
                <BsCartFill style={style.cart} />
                {numItems > 0 && (<div style={style.badge}>{numItems}</div>)}
              </div>
            </li>
            <li><NavLink to='/persist' end>Persist</NavLink></li>
            <li>
              <div style={style.cartBox} onClick={() => {alert(JSON.stringify(cartItemsPersist))}}>
                <BsCartFill style={style.cart} />
                {numItemsPersist > 0 && (<div style={style.badge}>{numItemsPersist}</div>)}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const style = {
  cartBox: {
    position: 'relative'
  },
  cart: {
    width: '20px',
    height: '20px',
  },
  badge: {
    position: 'absolute',
    background: '#ff4d00',
    borderRadius: '50%',
    fontSize: '0.5rem',
    width: '15px',
    height: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '-9px',
    right: '-9px'
  }
}

export default Header
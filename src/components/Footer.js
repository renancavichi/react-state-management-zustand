import './Footer.css'
import { useCartStore } from '../store/useCartStore'
import {usePersistCartStore} from '../store/usePersistCartStore'

const Footer = () => {
  const clearCart = useCartStore((state) => state.removeAll)
  const clearPersistCart = usePersistCartStore((state) => state.removeAll)

  return (
    <footer className='main-footer'>
      <p>© 2022 Renan Cavichi</p>
      <p><a href="https://br.linkedin.com/in/renancavichi">LinkedIn</a></p>
      <p><button onClick={() => {
        clearCart()
        clearPersistCart()
      }}>Clear Cart</button></p>
    </footer>
  )
}

export default Footer
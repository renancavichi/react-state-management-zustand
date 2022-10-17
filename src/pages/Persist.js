import {useEffect, useState} from 'react'
import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import CardGame from '../components/CardGamePersist'
import games from '../database/games.json'
import {usePersistCartStore} from '../store/usePersistCartStore'

const Persist = () => {
  const [isLoading, setIsLoading] = useState(true)
  const cartItems = usePersistCartStore((state) => state.items)

  useEffect(() => {
    // fetch 
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  },[])

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Persistence in Local Storage | Game Shop</h1>
        <p>Add your favorite game to cart!</p>
        {
          isLoading
          ? <p>Loading...</p>
            : games.map((game) => {
              return (
                <CardGame key={game.id} game={game} cart={cartItems.includes(game.id)} />
            )}
            
          )
        }
      </MainContainer>
      <Footer />
    </> 
  )
}

export default Persist
import {useEffect, useState} from 'react'
import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import CardGame from '../components/CardGame'
import games from '../database/games.json'
import {useCartStore} from '../store/useCartStore'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const cartItems = useCartStore((state) => state.items)

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
        <h1>Home | Game Shop</h1>
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

export default Home
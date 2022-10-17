import { Link } from 'react-router-dom'
import { BsCartPlus as EmptyCart, BsFillCartCheckFill as AddedCart } from 'react-icons/bs'
import {usePersistCartStore} from '../store/usePersistCartStore'


const CardGame = ({ game, cart }) => {  
    const addToCart = usePersistCartStore((state) => state.addItem)
    const {card, cover, box, title, text, buttonLink} = style

    return (
    <div style={card}>
        <Link to={`/game/${game.id}`}>
            <img src={game.cover} style={cover} alt={game.title}/>
        </Link>
        <div style={box}>
            <Link to={`/game/${game.id}`}>
                <h1 style={title}>{game.title}</h1>
                <p style={text}>{game.platform}</p>
                </Link>
                {
                    cart ? <AddedCart style={buttonLink} /> : <EmptyCart style={buttonLink} onClick={() => {addToCart(game.id)}} />
                }
        </div>
    </div>
    )
}

const style = {
    cover: {
        background: '#CCC',
        width: '120px',
        margin: '0 10px 0 0'
    },
    card: {
        width: '400px',
        background: '#EEE',
        display: 'flex',
        padding: '10px',
        borderRadius: '10px',
        margin: '15px'
    },
    title: {
        margin: 0,
        fontSize: '1.2rem',
        color: "#000"
    },
    text: {
        margin: '10px 0 10px 0',
        color: "#333",
        fontSize: '1rem',
    },
    box: {
        width: '235px'
    },
    buttonLink: {
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px',
        marginRight: '10px',
        width: '30px',
        height: '30px'
    }
}

export default CardGame
import styles from './Cart.module.css';
import CardItem from './CartItem';
import uniqid from 'uniqid';
export default function Cart({setOpenCart, cartItems, setCartItems}) {
    return(
        <div id={styles["cart-container"]}>
            <div onClick={() => setOpenCart(false)} className={styles.backdrop}></div>
            <div className={styles.cart}>
                <h3>Cart</h3>
                {
                    cartItems.map((item) => {
                        return(
                            <CardItem item={item} key={uniqid()}></CardItem>
                        )
                    })
                }
            </div>
        </div>
    )
}
import styles from './Cart.module.css';
import CartItem from './CartItem';
import uniqid from 'uniqid';
export default function Cart({updateQuantity, setOpenCart, cartItems}) {
    return(
        <div id={styles["cart-container"]}>
            <div onClick={() => setOpenCart(false)} className={styles.backdrop}></div>
            <div className={styles.cart}>
                <h3>Cart</h3>
                <div id={styles["cart-item-container"]}>
                {
                    cartItems.map((item) => {
                        return(
                            <CartItem item={item} updateQuantity={updateQuantity} key={uniqid()}></CartItem>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
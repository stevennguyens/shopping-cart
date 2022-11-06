import styles from './CartItem.module.css'
export default function CartItem({item}) {
    return(
        <div className={styles["cart-item-container"]}>
            <img src={item.img.front}></img>
            <div>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
            </div>
        </div>
    )
}
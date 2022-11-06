import {
    NavLink
} from 'react-router-dom';
import styles from './Header.module.css';

const onMerchClick = () => {
    
}

const Header = ({cartItems, setOpenCart}) => {
    return(
        <div id={styles.header}>
            <NavLink to={`/merch/all`} className={styles.text}>
                Merch
            </NavLink>
            <NavLink to={`/`} className={styles["header-title"]}>Taylor Swift</NavLink>
            <div className={styles["cart-icon"]}>
                <p>{cartItems.length}</p>
                <span onClick={(e) => setOpenCart(true)} className="material-symbols-outlined">
                    shopping_bag
                </span>
            </div>
        </div>
    )
}

export default Header;
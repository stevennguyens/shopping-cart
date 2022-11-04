import {
    NavLink
} from 'react-router-dom';
import styles from './Header.module.css';

const onMerchClick = () => {
    
}

const Header = () => {
    return(
        <div id={styles.header}>
            <NavLink to={`/merch/all`} className={styles.text}>
                Merch
            </NavLink>
            <NavLink to={`/`} className={styles["header-title"]}>Taylor Swift</NavLink>
            <NavLink to={`/shopping-cart`} className={styles.cart}>
                <span className="material-symbols-outlined">
                    shopping_bag
                </span>
            </NavLink>
        </div>
    )
}

export default Header;
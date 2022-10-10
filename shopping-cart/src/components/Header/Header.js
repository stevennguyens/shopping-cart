import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <a className={styles.text}>Merch</a>
            <h1>Taylor Swift</h1>
            <a className={styles.cart}>S</a>
        </div>
    )
}

export default Header;
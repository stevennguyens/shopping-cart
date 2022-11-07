import products from '../data/allProducts';
import styles from '../styles/ProductPage.module.css';
import { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import QuantityBtn from '../components/QuantityBtn/QuantityBtn';

export default function ProductPage() {
    const {cartItems, setCartItems} = useOutletContext();
    const [quantity, setQuantity] = useState(1);

    const onChange = (e) => {
        if (e.target.value > 0) {
            // do nothing
        } else {
            e.target.value = 1;
        }
    }

    const onClickAdd = () => {
        setQuantity(prev => prev += 1)
    }

    const onClickSubtract = () => {
        if (quantity > 0) setQuantity(prev => prev -= 1);
    }

    const addProduct = (product) => {
        let productQuantity = product;
        if (cartItems.find(item => item.id === product.id)) {
            productQuantity.quantity += quantity;
            setCartItems(cartItems => {
                let updatedCart = cartItems.filter(item => item.id !== product.id);
                return [...updatedCart, productQuantity]
            });
        } else {
            productQuantity.quantity = quantity;
            setCartItems(cartItems => [...cartItems, productQuantity]);
        }
    }

    let { productId } = useParams();
    let product = products.find(product => productId === product.id);
    return(
        <div className={styles["product-page"]}>
            <div className={styles["product-img"]}>
                <img onMouseEnter={e => {e.target.src=product.img.back}} onMouseLeave={e=>{e.target.src=product.img.front}} src={product.img.front}></img>
            </div>
            <div className={styles["product-info"]}>
                <h3>{product.name}</h3>
                <p className={styles.price}>${product.price}</p>
                <QuantityBtn onChange={onChange} onClickAdd={onClickAdd} onClickSubtract={onClickSubtract} quantity={quantity}/>
                <button onClick={() => addProduct(product)} className={`${styles.button} ${styles["add-to-bag-button"]}`}>Add to Bag</button>
            </div>
        </div>
    )
}
import products from '../data/allProducts';
import styles from '../styles/ProductPage.module.css';
import { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

export default function ProductPage() {
    const {cartItems, setCartItems} = useOutletContext();
    const [quantity, setQuantity] = useState(1);

    const addProduct = (product) => {
        let productQuantity = product;
        if (cartItems.find(item => item.id === product.id)) {
            console.log("found");
            productQuantity.quantity += quantity;
            setCartItems(cartItems => [...cartItems, productQuantity]);
        } else {
            console.log("not found");
            productQuantity.quantity = 1;
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
                <p>${product.price}</p>
                <div className={styles["quantity-btn"]}>
                    <div onClick={(e)=>setQuantity(prev=>{
                        if(prev>1) return prev-1
                    })}>-</div>
                    <input value={quantity} onChange={(e)=>{
                        if (+e.target.value > 0) {
                            setQuantity(+e.target.value)
                        } else if (!e.target.value) {
                            setQuantity("");
                        } else {
                            setQuantity(1);
                        }
                    }}></input>
                    <div onClick={()=>setQuantity(prev=>prev+1)}>+</div>
                </div>
                <button onClick={() => addProduct(product)} className={`${styles.button} ${styles["add-to-bag-button"]}`}>Add to Bag</button>
            </div>
        </div>
    )
}
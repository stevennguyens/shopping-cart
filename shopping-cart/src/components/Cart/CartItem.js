import styles from './Cart.module.css';
import QuantityBtn from '../QuantityBtn/QuantityBtn';
import {useState} from 'react';

export default function CartItem({updateQuantity, item}) {
    const onChange = (e) => {
        if (!(e.target.value > 0) && e.target.value) {
            e.target.value = 1;
        }
    }

    const onBlur = (e) => {
        if (!e.target.value) {
            e.target.value = 1;
        }
        updateQuantity(item, e.target.value)
    }

    const onClickAdd = (e) => {
        updateQuantity(item, item.quantity + 1);
    }

    const onClickSubtract = (e) => {
        if (item.quantity >= 0) {
            updateQuantity(item, item.quantity - 1);
        } 
    }
    return(
        <div className={styles["cart-item"]}>
            <div className={styles["cart-item-left"]}>
                <img src={item.img.front}></img>
                <div>
                    <h5>{item.name}</h5>
                    <p className={styles.price}>${item.price * item.quantity}</p>
                </div>
            </div>
            <div className={styles["cart-item-right"]}>
                <span onClick={() => updateQuantity(item, 0)} className="material-symbols-outlined">
                    close
                </span>
                <QuantityBtn quantity={item.quantity} onChange={onChange} onBlur={onBlur} onClickAdd={onClickAdd} onClickSubtract={onClickSubtract}/>
            </div>
            
        </div>
    )
}
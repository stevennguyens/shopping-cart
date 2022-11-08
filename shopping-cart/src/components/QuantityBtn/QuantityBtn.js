import styles from './QuantityBtn.module.css';
import { forwardRef } from 'react';
const QuantityBtn = forwardRef(({onChange, onBlur, onClickAdd, onClickSubtract, quantity}, ref) => {
    return (
        <div className={styles["quantity-btn"]}>
            <div onClick={onClickSubtract}>-</div>
            <input ref={ref} defaultValue={quantity} onBlur={onBlur} onChange={onChange}></input>
            <div onClick={onClickAdd}>+</div>
        </div>
    )
})

export default QuantityBtn
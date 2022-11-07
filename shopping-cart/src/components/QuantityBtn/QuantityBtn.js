import styles from './QuantityBtn.module.css';
export default function QuantityBtn({onChange, onBlur, onClickAdd, onClickSubtract, quantity}) {
    return (
        <div className={styles["quantity-btn"]}>
            <div onClick={onClickSubtract}>-</div>
            <input value={quantity} onBlur={onBlur} onChange={onChange}></input>
            <div onClick={onClickAdd}>+</div>
        </div>
    )
}
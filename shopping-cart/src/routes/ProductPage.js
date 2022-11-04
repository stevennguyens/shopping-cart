import products from '../data/allProducts';
import styles from '../styles/ProductPage.module.css'
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    let { productId } = useParams();
    let product = products.find(product => productId === product.id);
    return(
        <div className={styles["product-page"]}>
            <img onMouseEnter={e => {e.target.src=product.img.back}} onMouseLeave={e=>{e.target.src=product.img.front}} src={product.img.front}></img>
            <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </div>
        </div>
    )
}
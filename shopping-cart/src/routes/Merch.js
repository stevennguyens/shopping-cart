import products from '../data/allProducts'
import categories from '../data/categories'
import Card from "../components/Card/Card"
import uniqid from 'uniqid'
import styles from '../styles/Merch.module.css'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Merch() {
    let {categoryId} = useParams();
    const [category, setCategory] = useState('all');

    
    // state for category
    return (
        <div className={styles["merch-container"]}>
            <div className={styles.sidebar}>
                {categories.map(category => {
                    return(
                        <NavLink key={category.id} className={({isActive}) => (isActive ? styles.active : "")} to={`/merch/${category.id}`}>{category.name}</NavLink>
                    )
                })}
            </div>
            <div className={styles["product-container"]}>
                {categoryId === 'all' ?
                    products.map(product => {
                        return (
                            <Link to={`/merch/product/${product.id}`}>
                                <Card className={styles.card} key={uniqid()} product={product}/>
                            </Link>
                        )
                    }) :
                    products.filter(product => product.categoryId === categoryId)
                            .map(product => {
                                return (
                                    <Link to={`/merch/product/${product.id}`}>
                                        <Card className={styles.card} key={uniqid()} product={product}/>
                                    </Link>
                                    
                                )
                    })

                }
            </div> 
        </div>
    )
}


export default function Card({className, product}) {
    return (
        <div className={className} id={product.id}>
            <img onMouseEnter={e => {e.target.src=product.img.back}} onMouseLeave={e=>{e.target.src=product.img.front}} src={product.img.front}></img>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
    )
}
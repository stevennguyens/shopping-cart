import {
  Outlet,
  useLocation
} from 'react-router-dom';
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import {useState, useEffect} from 'react';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const removeProduct = (product) => {
    setCartItems(prev => [...prev.filter(item => item.id !== product.id)])
  }

  const updateQuantity = (product, quantity) => {
    if (quantity > 0) {
      let newProduct = product;
      newProduct.quantity = +quantity
      setCartItems(prev => [...prev.map(item => {
        if (item.id === product.id) {
          return newProduct
        } else {
          return item
        }
      })])
    } else {
      removeProduct(product);
    }
  }


  useEffect(() => {
    setTotalItems(cartItems.reduce((prev, curr) => {
      return prev + curr.quantity}, 0))
  }, [cartItems])

  let path = useLocation().pathname;

  return (
    <div className={path === '/' ? 'home' : ''}>
      <Header totalItems={totalItems} setTotalItems={setTotalItems} cartItems={cartItems} setOpenCart={setOpenCart} />
      <Outlet context={{openCart, setOpenCart, cartItems, setCartItems}}/>
      {openCart ? <Cart updateQuantity={updateQuantity} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems} /> : null}
    </div>
  );
}

export default App;

import {
  Outlet
} from 'react-router-dom';
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import {useState, useEffect} from 'react';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [closeCart, setCloseCart] = useState(true);
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
  return (
    <>
      <Header totalItems={totalItems} setTotalItems={setTotalItems} cartItems={cartItems} setOpenCart={setOpenCart} />
      <div id="content">
        <Outlet context={{openCart, setOpenCart, cartItems, setCartItems}}/>
      </div>
      {openCart ? <Cart updateQuantity={updateQuantity} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems} /> : ""}
    </>
  );
}

export default App;

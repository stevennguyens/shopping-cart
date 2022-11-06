import {
  Outlet
} from 'react-router-dom';
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import {useState} from 'react';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [closeCart, setCloseCart] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} setOpenCart={setOpenCart} />
      <div id="content">
        <Outlet context={{openCart, setOpenCart, cartItems, setCartItems}}/>
      </div>
      {openCart ? <Cart setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems} /> : ""}
    </>
  );
}

export default App;

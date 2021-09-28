import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  return (
      // <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
      </CartProvider>
      // </Fragment>
  );
}

export default App;

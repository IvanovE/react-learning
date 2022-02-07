import { useState } from "react"

import { Header } from "./Layout/Header/Header"
import { Meals } from "./components/Meals/Meals"
import { Cart } from "./components/Cart/Cart"
import { CartProvider } from "./store/CartProvider"

export function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  return (
    <CartProvider>
      {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      <Header setCartIsShown={setCartIsShown} />
      <Meals />
    </CartProvider>
  )
}

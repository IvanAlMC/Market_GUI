import { Products } from './components/Products.jsx'
import { products as initialProduct} from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { useState } from 'react'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {

  const [products] = useState(initialProduct)
  const {filterProducts} = useFilters()
  const filteredProduts = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProduts}/>
      <Footer/>
    </CartProvider>
  )
}

export default App

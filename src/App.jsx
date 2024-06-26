import { useState } from 'react'
import { Products } from './components/Products.jsx'
import { products as initialProduct} from './mocks/products.json'
import { Header } from './components/Header.jsx'

function App() {
  const [products] = useState(initialProduct)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProduts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProduts}/>
    </>
  )
}

export default App

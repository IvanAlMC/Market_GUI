import { useState } from 'react'
import './Filters.css'

export function Filters ( {onChange}) {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className='filters'>
            <div>
                <label htmlFor="price">Desde el precio: </label>
                <input 
                    type="range"
                    id="price"
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>
                    ${minPrice}
                </span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>Todos</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='home-decoration'>Hogar</option>
                    <option value='groceries'>Alimentos</option>
                    <option value='skincare'>Cuidado de Piel</option>
                    <option value='fragrances'>Perfumes</option>
                </select>
            </div>
        </section>
    )
}
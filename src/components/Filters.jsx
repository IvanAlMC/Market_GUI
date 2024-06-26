import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {

    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Desde el precio: </label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>
                    ${filters.minPrice}
                </span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
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
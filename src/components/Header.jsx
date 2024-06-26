import { Filters } from './Filters.jsx'

export function Header ( {changeFilters} ) {
    return(
        <header>
            <h1>Holiwis, Esta es la tienda</h1>
            <Filters onChange = {changeFilters}/>
        </header>
    )
}
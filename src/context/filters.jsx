import { createContext, useState} from "react";

//Con esto creo el contexto
export const FiltersContext = createContext()

//con esto proveemos el contexto
export const FiltersProvider = ({children}) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: '0'
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
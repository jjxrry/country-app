import { useEffect, useState } from 'react'
import './index.css'
import apiRequest from './services/apiRequest'
import Filter from './components/Filter'
import Results from './components/Results'


const App = () => {
    const [newFilter, setNewFilter] = useState('')
    const [results, setResults] = useState([])

    const filteredCountries = newFilter.length === 0 ? results : results.filter(country => country.name.common.toLowerCase().indexOf(newFilter) >= 0)

    useEffect(() => {
        apiRequest
        .getAll()
        .then(returnCountries => {
            setResults(returnCountries)
        })
        }, [])
        
    const handleFilter = (e) => {
        setNewFilter(e.target.value.toLowerCase())
    }

    return (
        <div>
        <Filter handleFilter={handleFilter}/>
        <Results 
            filter={newFilter}
            countries={filteredCountries}
            handleFilter={handleFilter}
        />
        </div>
    )
}

export default App
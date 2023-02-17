const List = ({country, handleFilter}) => {
    return(
        <li>
            {country.name.common}
            <button value={country.name.common} onClick={handleFilter}>show</button>
        </li>
    )
}

export default List
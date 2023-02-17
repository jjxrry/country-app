const Filter = ({handleFilter}) => {
    return(
        <div>
            <form><label>Find Countries: </label><input onChange={handleFilter}></input></form>
        </div>
    )
}

export default Filter
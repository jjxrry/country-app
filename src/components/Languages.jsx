const Languages = ({ languages }) => {
    const languageList = Object.keys(languages).map((n,i) => (
        <li key={i}>
            <span>{languages[n]}</span>
        </li>
    ))

    return(
        <ul>
            { languageList }
        </ul>
    )
}

export default Languages
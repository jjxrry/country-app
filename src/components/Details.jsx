import { useState, useEffect } from "react"
import axios from "axios"
import Languages from "./Languages"

const Details = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const weatherHook = () => {
            axios
                .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=8784a7fe1ae146111e3f79232c7921b3`)
                .then(response => {
                    setWeather(response.data)
                })
        }
        weatherHook()
    }, [country.name])

    console.log(country);

    if(weather !== null) {
        return (
            <div>
                <h1>{country.name.official}</h1>
                <div>Capital: { country.capital }</div>
                <div>Population: { country.population }</div>
    
                <h3>Languages</h3>
                <Languages languages={ country.languages }/>
                <br/>

                <div>
                    <img src={ country.flags.svg } width="200px"/>
                </div>

                <h3>Weather in {country.name.common}</h3>
                <div>Current Temp: {((((weather.list[0].main.feels_like)-273.15)*9/5+32).toFixed(1))}F</div>
                <div>Current Wind: {weather.list[0].wind.speed} mph</div>
            </div>
        )
    } else {
        <div>
                <h1>{country.name.official}</h1>
                <div>Capital: { country.capital }</div>
                <div>Population: { country.population }</div>
    
                <h3>Languages</h3>
                <Languages languages={ country.languages }/>

                <br/>

                <div>
                    <img src={ country.flags.svg } width="200px"/>
                </div>

                <h3>Weather in {country.name.common}</h3>
                <div>Weather for {country.name.common} loading...</div>
            </div>
    }

}

export default Details
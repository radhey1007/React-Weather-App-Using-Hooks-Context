import React , {useContext} from 'react'
import Context from '../Context';


function WeatherInformation() {

    const {weather,city} = useContext(Context);

    const { temp, humidity, pressure } = weather;
    return (
    <div className="weatherInfo">
        <p>
            Weather forecast for :
            <span className="weather_value"> { city } </span>
        </p> 
        <p>
            Temperature:
            <span className="weather_value"> { temp } </span>
        </p> 
        <p>
            Humidity:
            <span className="weather_value"> { humidity } </span>
        </p>
        <p>
            Pressure:
            <span className="weather__value"> { pressure } </span>
        </p>  	
	</div>
    )
}

export default WeatherInformation

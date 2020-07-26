import React , {useContext} from 'react';
import Context from '../Context';


function WeatherSearch() {

    const {getForecastDetail} = useContext(Context);

    return (
        <div className="weatherSearch">
            <form onSubmit={getForecastDetail} className="weatherSearchForm">
                <input placeholder="Enter the name of the city to get started.." autoComplete="off" type="text" className="serachBar" name="location"/>
                <button className="serachButton"> Search </button>  
            </form>    
        </div>
    )
}

export default WeatherSearch

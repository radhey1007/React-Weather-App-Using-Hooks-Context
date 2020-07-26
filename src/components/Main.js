import React , { useState } from 'react'
import axios from 'axios';
import style from '../styles/modules/main.module.css'
import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherInformation from './WeatherInformation';
import Context from '../Context';
import Error from './Error';
import Datetime from './Datetime';
import Footer from './Footer';



function Main() {

    const [weather , setWeather] = useState();
    const [city , setCity] = useState();
    const [error , setError] = useState();
    
    const getForecastDetail = async event => {
        event.preventDefault();
        const location = event.target.elements.location.value;  

        if(!location) return setError("Please enter the city name."), setWeather(null);

        const API_KEY = 'fc6446bda953ebdab7b8e47f022b0844';
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`; 
        const request = await axios.get(API_URL);
        const response = await request;
        setWeather(response.data.main);
        setCity(response.data.name);
        setError(null);
    }

    return (
        <div className={style.main}>
            <h1>Radhey React- Weather App</h1>
            <Header/>
            <Content>
            <Datetime />
            <Context.Provider value={ {getForecastDetail , weather , city}}>
            <WeatherSearch/>  
            { weather && <WeatherInformation /> }    
            { error && <Error error={error}/> }         
            </Context.Provider>
            </Content>
            <Footer />
        </div>
    )
}

export default Main

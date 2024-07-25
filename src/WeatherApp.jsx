import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        
        city: "Delhi",
        feelsLike: 20.05,
        humidity: 32,
        temp: 21.05,
        tempMax: 21.05,
        tempMin: 21.05,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div>
            <h2>Weather by Abdul Rahim</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>

        </div>
    );
}

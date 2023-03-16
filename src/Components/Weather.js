import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();

    let display = useSelector(selectDisplay);
    let latitude = display.capitalInfo.LatLng[0];
    let longitude = display.capitalInfo.LatLng[1];

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude}, ${longitude}`},
            headers: {
                'X-RapidAPI-Key': '4106c1e595mshbdc4680dc4633acp100080jsn1d8db9265b95',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
             }
        };

        axios.request(options).then(function (response) {
	        console.log(response.data);
            setWeather(response.data);
        }).catch(function (error) {
        	console.error(error);
        });
    }, [])

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather.current.condition.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather.current.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather.current.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather.current.wind_mph} mph{""}
                        {weather.current.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;

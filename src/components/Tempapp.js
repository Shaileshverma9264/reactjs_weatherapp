import React, { useEffect, useState } from 'react';
import './css/Style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            // This api we find from openweather api from google
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b8575db82aa8a6459d0570f5cee8da55 `;
            const response = await fetch(url);
            const resJson = await response.json();

            // console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" value={search} onChange={(event) => { setSearch(event.target.value) }


                    } />
                </div>
                {!city ? (
                    <p className="errorMsg">no data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max">Min: {city.temp_min}°Cel |Max: {city.temp_max}°Cel</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>

                )};



            </div>

        </>
    );
};
export default Tempapp;

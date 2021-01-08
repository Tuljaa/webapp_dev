import React from 'react'

function Weather(props) {
    console.log("IN WEATHRE JS ",props.data.temp);
   //const {data}=props.data;
    return (
        <div>
            <ol className="mt-4 font-weight-light"> 
                <li className="p-1">Temparature = {props.data.temp}</li>
                <li className="p-1">Feels Like = {props.data.feels_like}</li>
                <li className="p-1">Temparature Minimum = {props.data.temp_min}</li>
                <li className="p-1"> Temparature Maximum = {props.data.temp_max}</li>
            </ol>
        </div>
    );
}

export default Weather

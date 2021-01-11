import React from 'react'

function Weather(props) {
    return (
        <div>
            <ol className="list-group-horizontal  mt-4"> 
                <li className="list-group-item list-group-item-success p-1">Temparature = {props.data.temp}</li>
                <li className="list-group-item list-group-item-info p-1">Feels Like = {props.data.feels_like}</li>
                <li className="list-group-item list-group-item-warning p-1">Temparature Minimum = {props.data.temp_min}</li>
                <li className="list-group-item list-group-item-danger p-1"> Temparature Maximum = {props.data.temp_max}</li>
            </ol>
        </div>
    );
}

export default Weather

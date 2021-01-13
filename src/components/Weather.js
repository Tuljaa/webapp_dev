import React from 'react'

function Weather(props) {
    return (
        <div>
            <ol className="list-group-horizontal  mt-4" data-test="orderedlist"> 
                <li className="list-group-item list-group-item-success p-1" data-test="listitem">Temparature = {props.data.temp} K</li>
                <li className="list-group-item list-group-item-info p-1" data-test="listitem">Feels Like = {props.data.feels_like} K</li>
                <li className="list-group-item list-group-item-warning p-1" data-test="listitem">Temparature Minimum = {props.data.temp_min} k</li>
                <li className="list-group-item list-group-item-danger p-1" data-test="listitem"> Temparature Maximum = {props.data.temp_max} k</li>
            </ol>
        </div>
    );
}

export default Weather

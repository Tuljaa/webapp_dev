import React from 'react'

function Weather(props) {
    console.log(props.data);
   // const {data}=props;
    return (
        <div>
            <ul>
                <li>
                    {props.data}
                </li>
            </ul>
        </div>
    );
}

export default Weather

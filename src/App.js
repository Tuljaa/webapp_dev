import './css/App.css';
import React, { useState} from "react";
import Weather from './components/Weather.js';

const App=() => {

  const APIKEY="fbf712a5a83d7305c3cda4ca8fe7ef29";

  const [Form, setstate] = useState({
    city:"",
    country:""
  })
  const [weather, setweather] = useState([ ])

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    if(name==="city"){
      setstate({...Form, city:value})
    }
    if(name==="country"){
      setstate({...Form, country:value})
    }
  }

  async function apiData(e){
      e.preventDefault();
      if(Form.city==="" || Form.country===""){
        alert("Enter values");
          return
      }
      const data= await fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${Form.city}&units=metric&appid=${APIKEY}`)
      const jsonobj= await data.json(); 
      setweather({data:jsonobj});
      } 

  return (
    <div className="App" data-test="App">
      <h2 className=" p-4 display-4" data-test="header"> Weather Forecast</h2><hr className="horizontal"></hr>
      <form className="form-inline ml-5" data-test="form">
        <label> <strong> City Name : </strong> </label>
        <input type="text" data-test="cityN" name="city" onChange={(e)=>handleChange(e)} placeholder="Enter City Name" className="form-control border border-dark" />
        <label> <strong>Country Name : </strong></label>
        <input type ="text" name="country" onChange={(e)=>handleChange(e)} placeholder="Enter Country Name" className="form-control border border-dark" data-test="countryN"/><br></br>
        <button type="submit" onClick={(e)=>apiData(e)} className="form-control btn btn-outline-dark p-2 m-4" data-test="submit"> <strong>Submit </strong> </button>
      </form>
    <hr ></hr>   
      {
        
      ( (weather.data!==undefined)? <div>
      < Weather data={weather.data}/>  </div> 
      : null )
    }
    </div>
  );
}
export default App;

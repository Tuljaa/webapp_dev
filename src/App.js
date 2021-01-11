import './App.css';
import React, { useState} from "react";
import Weather from './components/Weather.js';

const App=() => {

  const APIKEY="8c692ded13dc3e125587edd1d73ef8e1";

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
    if(Form.city===""){
      alert("Please enter the city name");
    }
    else{
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Form.city}&appid=${APIKEY}`)
      const jsonobj= await data.json();
      setweather({data:jsonobj.main});
      
    }
  } 
  return (
    <div className="App ">
      <h2 className="jumbotron font-weight-bold"> Weather Report Application</h2>
      <form className="form-group">
        <input type="text" name="city" onChange={(e)=>handleChange(e)} placeholder="Enter City Name" className="form-control active "/><br></br>
        <input type ="text" name="country" onChange={(e)=>handleChange(e)} placeholder="Enter Country Name" className="form-control"/><br></br>
        <button type="submit" onClick={(e)=>apiData(e)} className="form-control btn-outline-info"> Submit</button>
      </form>
      {
      ( (weather.data!==undefined)? <div>
      < Weather data={weather.data}/>  </div> 
      : null )
    }
    </div>
  );
}
export default App;

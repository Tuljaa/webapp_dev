import React from 'react'
import '../css/App.css';
import icon from '../cloudy.png';
import location from '../placeholder.png';

function Weather(props) {

    var styles = {
        'padding':'10px',
        width: '100px',
        height: '100px',
      };

      var stylesImg = {
        margin: '10px',
        width: '50px',
        height: '50px',
        display: 'inline-block',
      };

      const time=props.data.city.timezone/3600;
      const d = new Date();
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
     const nd = new Date(utc + (3600000*time)); 

    return (
    <div >
               <div className="d-inline-block  mr-3 mb-3">
               <img src={location} alt="Icon" style={stylesImg} ></img><br></br>
                <h2 >{props.data.city.name} <span>{props.data.city.country}</span></h2>
                </div>
            
                <div className="d-inline-block m-3">
                <img src={icon} alt="Icon" style={styles} ></img><br></br>
                <h1 className="display-4 d-inline-flex ">{props.data.list[0].main.temp} <span>&#8451;</span></h1>
                <h6>({props.data.list[2].weather[0].description})</h6>
                <h5><strong>{nd.toLocaleString()}</strong></h5>
                </div>

                <br></br><hr></hr>
            <h3 ><strong>Daily && Hourly Forecast</strong></h3> 
        { 
           Object.keys(props.data.list).map( (i , index) => {

            return(    
                   props.data.list[index].dt_txt.substring(11,19)==="00:00:00" && index < 34 && 
                    
                    <div className="flip-card d-inline-block" >
                    <div className="flip-card-inner">
                      <div className="flip-card-front" >                  
                        <img src={icon} alt="Icon" style={stylesImg}></img>
                          <h4><u>{props.data.list[index].dt_txt.substring(0,10)}</u></h4>
                             <h5>Temparature at {props.data.list[index].dt_txt.substring(11,13)}<span className="small">am</span> - {props.data.list[index].main.temp}<span>&#8451;</span></h5>
                              <h5>Temparature Max :{props.data.list[index].main.temp_max}<span>&#8451;</span></h5>
                             <h5>Temparature Min :{props.data.list[index].main.temp_min}<span>&#8451;</span></h5>
                             <h5>Feels Like :{props.data.list[index].main.feels_like}<span>&#8451;</span></h5>
                             <h4>{props.data.list[index].weather[0].description}</h4>
                            </div>

                            <div className="flip-card-back">
                             <div className="d-inline-block hourly ">
                                 <h4 className="m-3"><u>Checkout next 6 Hour Temparature</u></h4>
                             <h5>Temparature at {props.data.list[index+1].dt_txt.substring(11,13)}<span className="small">am</span>  -  {props.data.list[index+1].main.temp}<span>&#8451;</span></h5>
                             <h5>Temparature at {props.data.list[index+2].dt_txt.substring(11,13)}<span className="small">am</span>  -  {props.data.list[index+2].main.temp}<span>&#8451;</span></h5>
                             <h5>Temparature at {props.data.list[index+3].dt_txt.substring(11,13)}<span className="small">am</span>  -  {props.data.list[index+3].main.temp}<span>&#8451;</span></h5>
                             <h5>Temparature at {props.data.list[index+4].dt_txt.substring(11,13)}<span className="small">pm</span>  -  {props.data.list[index+4].main.temp}<span>&#8451;</span></h5>
                             <h5>Temparature at {props.data.list[index+5].dt_txt.substring(11,13)}<span className="small">pm</span>  -  {props.data.list[index+5].main.temp}<span>&#8451;</span></h5>
                             <h5>Temparature at {props.data.list[index+6].dt_txt.substring(11,13)}<span className="small">pm</span>  -  {props.data.list[index+6].main.temp}<span>&#8451;</span></h5>
                        </div>  
                     </div>
                    </div>
                </div>      
               
               );
               }
            )
        }
        </div>
    );
}

export default Weather

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
        width: '30px',
        height: '30px',
        display: 'inline-block',
      };

      var v1={
        'border-left': '1px solid black',
        height: '100px',
        'margin-left':'10px',
        'margin-top':'-100px',
      }
          
      const time=props.data.city.timezone/3600;
      const d = new Date();
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
     const nd = new Date(utc + (3600000*time)); 

    return (

    <div >

               <div className="d-inline-block  m-5" hourly>
               <img src={location} alt="Icon" style={stylesImg} ></img><br></br>
                <h3 >{props.data.city.name} <span>{props.data.city.country}</span></h3>
                </div>
            
                <div className="d-inline-block m-5" hourly>
                <img src={icon} alt="Icon" style={styles} ></img><br></br>
                <h1 className="display-4 d-inline-flex ">{props.data.list[0].main.temp} <span>&#8451;</span></h1>
                <h5><strong>{nd.toLocaleString()}</strong></h5>
                </div>

                <br></br><hr></hr>

            <h5 className="p-3">HOURLY</h5>

            <div className="d-inline-block hourly ">
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[1].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[1].dt_txt}</h5>
               
            </div>

            <div className="d-inline-block hourly" >
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[2].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[2].dt_txt}</h5>
         
                <div style={v1}></div>
            </div>

            <div className="d-inline-block hourly" >
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[3].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[3].dt_txt}</h5>
               
                <div style={v1}></div>
            </div>
            <br></br><hr ></hr>

            <h5 >DAILY</h5><br></br>

       
       <div className="flip-card hourly d-inline-block">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
                </div>
                <div className="flip-card-back">
                <div className="d-inline-block  " >
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
               </div>
                </div>
            </div>
            </div>

            <div className="flip-card d-inline-block">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
                </div>
                <div className="flip-card-back">
                <div className="d-inline-block hourly " >
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
               </div>
                </div>
            </div>
            </div>

            <div className="flip-card d-inline-block">
            <div className="flip-card-inner">
                <div class="flip-card-front">
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
                </div>
                <div className="flip-card-back">
                <div className="d-inline-block hourly " >
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
               </div>
                </div>
            </div>
            </div>

            <div className="flip-card d-inline-block">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
                </div>
                <div className="flip-card-back">
                <div className="d-inline-block hourly " >
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5>{props.data.list[4].main.temp}<span>&#8451;</span></h5>
                <h5>{props.data.list[4].dt_txt}</h5>
               </div>
                </div>
            </div>
            </div>

        </div>
       
    );
}

export default Weather

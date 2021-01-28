import React from 'react';
import './App.css';

export default class Issue extends React.Component{
    
    constructor(props){
        super(props);
    }
    render (){
        return(
          <>
         <tr>
            <td>{this.props.dataprop[0].id}</td> 
             <td>{this.props.dataprop[0].issuedesc}</td>
             <td>{this.props.dataprop[0].severity}</td>
             <td>{this.props.dataprop[0].status}</td>
         </tr>
         <tr>
         <td>{this.props.dataprop[1].id}</td>
         <td>{this.props.dataprop[1].issuedesc}</td>
         <td>{this.props.dataprop[1].severity}</td>
         <td>{this.props.dataprop[1].status}</td>
     </tr>
     <tr>
     <td>{this.props.dataprop[2].id}</td>
     <td>{this.props.dataprop[2].issuedesc}</td>
     <td>{this.props.dataprop[2].severity}</td>
     <td>{this.props.dataprop[2].status}</td>
    </tr>
</>
        )
    }
}
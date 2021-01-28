import React from 'react';
import Issue from './Issue';
import './App.css';

export default class IssueList extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div className="container">
        <table >
           <tr>
                <th> ID </th>
            <th> Issue Description </th>
             <th>Severity </th>
            <th> Startup </th>
            </tr>
                    <Issue dataprop={this.props.dataprop}/>
        </table>
        </div>
    );
}
}
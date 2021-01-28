import './App.css';
import data from './data';
import React from 'react';
import IssueList from './IssueList';

class AllIssuesPage extends React.Component {

constructor(){
  super();
  this.state=[
    {
      id: 0,
      issuedesc: "",
      severity: "",
      status: ""
  }, 
  {
    id: 0,
    issuedesc: "",
    severity: "",
    status: ""
  }, 
  {
  id: 0,
  issuedesc: "",
  severity: "",
  status: ""
  }, 
  ]
}

componentDidMount(){
  this.setState([
   {
      ...this.state[0],
      id : data[0].id,
      issuedesc : data[0].issuedesc,
      severity : data[0].severity,
      status : data[0].status,
   },
   {
    ...this.state[1],
    id : data[1].id,
    issuedesc : data[1].issuedesc,
    severity : data[1].severity,
    status : data[1].status,
   },
  {
  ...this.state[2],
  id : data[2].id,
  issuedesc : data[2].issuedesc,
  severity : data[2].severity,
  status : data[2].status,
 }
  ]
  );
 // console.log(this.state[0]);
}
 
render(){
 // console.log(this.state[0]);
  return (
    <div className="App">
      <h2 > Issue List </h2>
      <IssueList dataprop={this.state}/>
    </div>
  );
}
}
export default AllIssuesPage;

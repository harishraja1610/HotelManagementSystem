import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate} from 'react-router';

import { instanceOf } from 'prop-types';


export default class Login extends Component {
    constructor(props){
  
    super(props);
    this.state={isAuthendicated:false};
    this.handleSubmit=this.handleSubmit.bind(this);
}
    handleSubmit(event){
        event.preventDefault();
        const data=new FormData(event.target);
        console.log(data);
        fetch("http://localhost:8080/HOTELM/login?uname="+data.get("uname")+"&pwd="+data.get("pwd"))
        .then((response)=>response.json())

        .then((data)=>{console.log(data);
            if(data.status=="success"){
             console.log("login success");
           this.setState({isAuthendicated:true})
           this.render();   
        }})
        
    }
  render() {
    if(this.state.isAuthendicated){
    return <Navigate replace to={'/adminPanel'}/>
    }
  return (

    <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className='form-group'>
            <label>USER NAME</label>
            <input name='uname' type='text' className='form-control' placeholder='enter the name'></input>
          </div>
   
        <div className='form-group'>
            <label>PASS WORD</label>
            <input name='pwd' type='password' className='form-control' placeholder='enter the password'></input>
        </div>
          <button type='submit' value='login'>login</button>
          <button type='reset' value='reset'>reset</button>
        </div>
      </form>

    </div>
  );
}
}


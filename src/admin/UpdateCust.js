import { Component } from "react";
import AdminPanel from "../Adminpanel";


export default class UpdateCust extends Component {
  constructor(props) {
      super(props)
     
  }
  

  onSubmit = e => {
      e.preventDefault();
    const data=new FormData(e.target);
    fetch("http://localhost:8080/HOTELM/updateCust?custid="+data.get("custid")+"&custname="+data.get("custname")+"&checkin="+data.get("checkin")+"&checkout="+data.get("checkout")+"&paymentstatus="+data.get("paymentstatus")+"&email="+data.get("email")+"&phone="+data.get("phone"))
    .then((response)=>response.json()
    .then((data)=>{console.log(data);
     if(data.status=="success"){
      alert("Update Successful");
      
    }
    else{
      alert("Update Failed");
      
    }
  }))
      
  };

  
  
  render() {

      return (
          <div>
              <AdminPanel/>
        <div className='App d-flex flex-column align-items-center'>
        <h1>Update Customer</h1>
          <form onSubmit={this.onSubmit} style={{ width :'300px'} }  >
          <div className="form-group">
                  <label>Customer Id:</label>
                  <input
                      type="number"
                      className="form-control"
                      name="custid"
                      required
            
                  />
                  
              </div>
              <div className="form-group">
                  <label>Customer Name:</label>
                  <input
                      type="text"
                      className="form-control"
                      name="custname"
                      required

                  />
                
              </div>
              <div className="form-group">
                  <label>check-in:</label>
                  <input
                      type="date"
                      className="form-control"
                      name="checkin"
                      required
                     
                  />
                 
              </div>
              <div className="form-group">
                  <label>Check-out:</label>
                  <input
                      type="date"
                      className="form-control"
                      name="checkout"
                      required
        
                  />
            
              </div>
              <div className="form-group">
                  <label>Payment status:</label>
                  <input
                      type="text"
                      className="form-control"
                      name="paymentstatus"
                      required

                  />
                 
              </div>
              <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
        
                  />
        
              </div>
            
              <div className="form-group">
                  <label>Phone:</label>
                  <input
                      type="text"
                      className="form-control"
                      name="phone"
                      required
                
                  />
            
              </div>
            
              
              <button type="submit" className="btn btn-info ">Update</button>
          </form>
          </div>
          </div>
      );
  }
}
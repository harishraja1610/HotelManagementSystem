import { Component } from "react";
import AdminPanel from "../Adminpanel";

export default class UpdateRoom extends Component {
  constructor(props) {
      super(props)

  }
  

  onSubmit = e => {
      e.preventDefault();
    const data=new FormData(e.target);
    fetch("http://localhost:8080/HOTELM/updateRoom?roomid="+data.get("roomid")+"&status="+data.get("status")+"&type="+data.get("type")+"&price="+data.get("price"))
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
          <h1>Update Room</h1>
          <form onSubmit={this.onSubmit} style={{ width :'300px'} }  >
          <div className="form-group">
                  <label>Room Id:</label>
                  <input
                      type="number"
                      className="form-control"
                      name="roomid"
                      required
                      
                  />
                  
              </div>
          <div className="form-group">
                  <label>Status</label>
                  <input
                      type="text"
                      className="form-control"
                      name="status"
                      required
                  />
                  
              </div>
              <div className="form-group">
                  <label>Type</label>
                  <input
                      type="text"
                      className="form-control"
                      name="type"
                      required
                      
                  />
                  
              </div>
              <div className="form-group">
                  <label>Price</label>
                  <input
                      type="number"
                      className="form-control"
                      name="price"
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
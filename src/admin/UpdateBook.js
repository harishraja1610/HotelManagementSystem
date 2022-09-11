import { Component } from "react";
import AdminPanel from "../Adminpanel";

export default class UpdateBook extends Component {
  constructor(props) {
      super(props)
      
  }
  

  onSubmit = e => {
      e.preventDefault();
    const data=new FormData(e.target);
    fetch("http://localhost:8080/HOTELM/updateBook?bookid="+data.get("bookid")+"&roomid="+data.get("roomid")+"&custid="+data.get("custid")+"&status="+data.get("status"))
    .then((response)=>response.json()
    .then((data)=>{console.log(data);
     if(data.status=="success"){
      alert("Update Successful");
      
    }
    else{
      alert("Update failed");
      
    }
  }))
      
  };


  
  render() {
      
      
      return (
        <div>
             <AdminPanel/>
        <div className='App d-flex flex-column align-items-center'>
        <h1>Update Book</h1>
        <form onSubmit={this.onSubmit} style={{ width :'300px'} }  >
        <div className="form-group">
            <label>Book ID:</label>
            <input
                type="number"
                className="form-control"
                name="bookid"
                required
            />
            
        </div>

        <div className="form-group">
            <label>Room ID</label>
            <input
                type="number"
                className= "form-control"
                name="roomid"
                required
                
            />
            
        </div>
        <div className="form-group">
            <label>Cust ID</label>
            <input
                type="number"
                className="form-control"
                name="custid"
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
        
        
        <button type="submit" className="btn btn-info ">Update</button>
    </form>
    </div>
    </div>
      );
  }
}
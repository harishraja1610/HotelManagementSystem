
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React ,{Component } from 'react';
import AdminPanel from '../Adminpanel';
class ViewBook extends Component  {
  constructor (props){
    super(props);
    this.state={
        columnDefs :[
            { field: 'bookid', headerName: 'bookid' ,sortable:true,filter:true,width:'300px'},
            { field: 'roomid', headerName: 'roomid'  ,sortable:true,filter:true,width:'300px'},
            { field: 'custid', headerName: 'custid'  ,sortable:true,filter:true,width:'300px' },
            { field: 'status', headerName: 'status' ,sortable:true,filter:true ,width:'300px'},
        
            
        ],
        rowData:null
  };
}
componentDidMount(){
    fetch("http://localhost:8080/HOTELM/viewBook")
    .then(res=>res.json())
    .then(rowData=>this.setState({rowData}))
    .catch(err=>console.log(err));
}
  render(){
  return (
    <div>
        <AdminPanel/>
    <div className="ag-theme-balham" style={{height:'700px',width:'100%'}}>
      <AgGridReact 
      pagination={true}
      enableSorting={true}
      enableFilter={true}
      columnDefs={this.state.columnDefs}
      rowData={this.state.rowData}/>
      </div>
    </div>
  );
  }
}

export default ViewBook;

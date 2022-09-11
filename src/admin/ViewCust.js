import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React ,{Component } from 'react';
import AdminPanel from '../Adminpanel';
class ViewCust extends Component  {
  constructor (props){
    super(props);
    this.state={
        columnDefs :[
            { field: 'custid', headerName: 'custid' ,sortable:true,filter:true,width:'200px'},
            { field: 'custname', headerName: 'custname'  ,sortable:true,filter:true,width:'200px'},
            { field: 'checkin', headerName: 'checkin'  ,sortable:true,filter:true,width:'200px' },
            { field: 'checkout', headerName: 'checkout' ,sortable:true,filter:true ,width:'200px'},
            { field: 'paymentstatus', headerName: 'paymentstatus'  ,sortable:true,filter:true,width:'200px'},
            { field: 'email', headerName: 'email' ,sortable:true,filter:true,width:'200px' },
            { field: 'phone', headerName: 'phone'  ,sortable:true,filter:true,width:'200px'},

        ],
        rowData:null
  };
}
componentDidMount(){
    fetch("http://localhost:8080/HOTELM/viewCust")
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

export default ViewCust;


import './App.css';
import AdminPanel from "./Adminpanel";
import Login from "./Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Logout from "./admin/Logout";
import AddCust from './admin/AddCust';
import ViewCust from './admin/ViewCust';
import UpdateCust from './admin/UpdateCust';
import DeleteCust from './admin/DeleteCust';
import AddRoom from './admin/AddRoom';
import UpdateRoom from './admin/UpdateRoom';
import ViewRoom from './admin/ViewRoom';
import DeleteRoom from './admin/DeleteRoom';
import AddBook from './admin/AddBook';
import UpdateBook from './admin/UpdateBook';
import ViewBook from './admin/ViewBook';
import DeleteBook from './admin/DeleteBook';

function App() {
  
  return (
    <div>
    <Router>
    <h1 className="head">HOTEL  MANAGEMENT SYSTEM</h1>
      <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path='/adminPanel' element={ <AdminPanel />}/>
      <Route path="/addCust" element={<AddCust/>}/>
      <Route path="/viewCust" element={<ViewCust/>}/>
      <Route path="/updateCust" element={<UpdateCust/>}/>
      <Route path="/deleteCust" element={<DeleteCust/>}/>
      <Route path="/addRoom" element={<AddRoom/>}/>
      <Route path="/updateRoom" element={<UpdateRoom/>}/>
      <Route path="/viewRoom" element={<ViewRoom/>}/>
      <Route path="/deleteRoom" element={<DeleteRoom/>}/>
      <Route path="/addBook" element={<AddBook/>}/>
      <Route path="/updateBook" element={<UpdateBook/>}/>
      <Route path="/viewBook" element={<ViewBook/>}/>
      <Route path="/deleteBook" element={<DeleteBook/>}/>
     
      </Routes>
    </Router>
    </div>
  );
}

export default App;

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
function AdminPanel(){
  return(
        <div>
    <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
  
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Customer"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/addCust">Add Customer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/updateCust">Update Customer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/viewCust">View Customer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/deleteCust">Delete Customer</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Room"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/addRoom">Add Room</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/updateRoom">Update Room</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/viewRoom">View Room</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/deleteRoom">Delete Room</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Book"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/addBook">Add Book</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/updateBook">Update Book</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/viewBook">View Book</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/deleteBook">Delete Book</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="log out"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    )
 
}
export default AdminPanel;
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
 import Nav from 'react-bootstrap/Nav'
 //import Form from 'react-bootstrap/Form'
 //import Button from 'react-bootstrap/Button'
 //import FormControl from 'react-bootstrap/FormControl'
//  import Dropdown from 'react-bootstrap/Dropdown'
 import NavDropdown from 'react-bootstrap/NavDropdown'
//  import DropdownButton from 'react-bootstrap/DropdownButton'

function Header(){
    return(
    <div>
        
<Navbar bg="light" expand="lg" variant="light">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/">Top Headlines</Nav.Link>
    <Nav.Link href="/news sources">News Source</Nav.Link>
      <NavDropdown title="" id="basic-nav-dropdown">
        <NavDropdown.Item href="/CNBC">CNBC</NavDropdown.Item>
        <NavDropdown.Item href="/google-india">Google News India</NavDropdown.Item>
        <NavDropdown.Item href="/the times of india">The Times of India</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="/countries">Countries</Nav.Link>
      <NavDropdown title="" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Argentina">Argentina</NavDropdown.Item>
        <NavDropdown.Item href="/India">India</NavDropdown.Item>
        <NavDropdown.Item href="/USA">USA</NavDropdown.Item>
        <NavDropdown.Item href="/China">China</NavDropdown.Item>
        <NavDropdown.Item href="/UAE">UAE</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">India</Nav.Link>
      <NavDropdown title="" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Sports">Sports</NavDropdown.Item>
        <NavDropdown.Item href="/Business">Business</NavDropdown.Item>
        <NavDropdown.Item href="/Entertainment">Entertainment</NavDropdown.Item>
        <NavDropdown.Item href="/Technology">Technology</NavDropdown.Item>
        <NavDropdown.Item href="/Health">Health</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>
    )
}
export default Header;
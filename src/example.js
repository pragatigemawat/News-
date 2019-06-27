import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
class SelectCategory extends React.Component {
    constructor(props){
        super(props)
      
    
 
};

 

  render() {
    return (
      // <Dropdown>
      
      <Dropdown >
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
       First select any country 
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item value="sports" onClick={()=>{this.props.Category("sports")}}>Sports</Dropdown.Item>
        <Dropdown.Item value="business" onClick={()=>{this.props.Category("business")}}>Business</Dropdown.Item>
        <Dropdown.Item value="science" onClick={()=>{this.props.Category("science")}}>Science</Dropdown.Item>
        <Dropdown.Item value="technology" onClick={()=>{this.props.Category("technology")}}>Technology</Dropdown.Item>
        <Dropdown.Item value="health" onClick={()=>{this.props.Category("health")}}>Health</Dropdown.Item>
        <Dropdown.Item value="entertainment" onClick={()=>{this.props.Category("entertainment")}}>Entertainment</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
       
        // </Dropdown>
    );
  }
}

export default SelectCategory;
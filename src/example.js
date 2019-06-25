import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class SelectCategory extends React.Component {
    constructor(props){
        super(props)
      
    
 
};

 

  render() {
    return (
      <Menu onClick={this.props.Category}mode="horizontal">
        <Menu.Item key="sports"> 
          Sports
        </Menu.Item>
        <Menu.Item key="business">Business
        </Menu.Item>
        <Menu.Item key="entertainment">Entertainment
        </Menu.Item>
        <Menu.Item key="health">Health
        </Menu.Item>
        <Menu.Item key="technology">Technology
        </Menu.Item>
        <Menu.Item key="science">Science
        </Menu.Item>
        
        </Menu>
    );
  }
}

export default SelectCategory;
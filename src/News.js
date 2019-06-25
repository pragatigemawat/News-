import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Drawer,Button,Icon} from 'antd';

const { Option } = Select;

class SelectCountry extends React.Component{
  state = { visible: false };
  constructor(props){
    super(props)
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


render(){
return(
  
  <div>
    <Button type="dark" onClick={this.showDrawer}>
    <Icon type="bars" />
    </Button>
    <Drawer
    width={500}
    onClose={this.onClose}
    visible={this.state.visible}
>
    {/* <Link to ="/country"></Link> */}
    <Select defaultValue="Please Select Any Country" style={{ width: 500 }} onChange={this.props.Change}>
      
      <Option value="in">India</Option>
      <Option value="au">Australia</Option>
      <Option value="jp">Japan</Option>
      <Option value="my">Malaysia</Option>
      <Option value="fr">France</Option>
      <Option value="ae">UAE</Option>
      <Option value="nz">New Zealand</Option>
      <Option value="za">South Africa</Option>
      <Option value="gb">United Kingdom</Option>
      <Option value="us">United States </Option>
      <Option value="cn">China</Option>
      <Option value="ru">Russia</Option>
    </Select>
    
    </Drawer>  
  </div>
  
)
}}

export default SelectCountry;
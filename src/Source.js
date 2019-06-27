import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import {Drawer,Button,Icon} from 'antd';
 //import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const { Option } = Select;

class SelectSource extends React.Component{
  state = { visible: false,placement:'left' };
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
  onChange = e => {
    this.setState({
      placement: e.target.value,
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
    closable={false}
    placement={this.state.placement}
    onClose={this.onClose}
    visible={this.state.visible}
>

    {/* <Link to ="/country"></Link> */}
    <Select defaultValue="Please Select Any Source" style={{ width: 500 }} onChange={this.props.Esource}>
      
      <Option value="abc-news">ABC News</Option>
      <Option value="argaam">Argaam</Option>
      <Option value="bloomberg">Bloomberg</Option>
      <Option value="bbc-sport">BBC Sport</Option>
      <Option value="business-insider">Business Insider</Option>
      <Option value="cnbc">CNBC</Option>
      <Option value="buzzfeed">Buzzfeed</Option>
      <Option value="news24">News24</Option>
      <Option value="entertainment-weekly">Entertainment Weekly</Option>
      <Option value="crypto-coins-news">Crypto Coins News</Option>
      <Option value="google-news">Google News </Option>
      <Option value="cnbc">CNBC </Option>
      <Option value="national-geographic">National Geographic</Option>
      <Option value="the-times-of-india">The Times Of India</Option>
      
    </Select>
    </Drawer>
    </div>
    
    
   
  
  
)
}}

export default SelectSource;
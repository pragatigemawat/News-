import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const { Option } = Select;

class SelectCountry extends React.Component{
  constructor(props){
    super(props)
  }

render(){
return(
  <Link to ="/country">
  <div>
    <Select defaultValue="" style={{ width: 120 }} onChange={this.props.Change}>
      
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
    
   
  </div>
  </Link>
)
}}

export default SelectCountry;
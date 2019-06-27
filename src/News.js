import React from 'react';
import 'antd/dist/antd.css';
import { Menu , Select } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import {Dropdown,Icon} from 'antd';

const { SubMenu } = Menu;
const {menu} = Menu;

class SelectCountry extends React.Component{
//  state = { visible: false };
  constructor(props){
    super(props)
  }


render(){
return(
  
  <div>
  
    
 <Menu mode="horizontal" value="" style={{ width: 500 }} >
 <Menu.Item value="in" onClick={()=>{this.props.Change("in")}}> 
           India
         </Menu.Item>

         
        <Menu.Item value="au" onClick={()=>{this.props.Change("au")}}>Australia
        </Menu.Item>
        <Menu.Item value="cn" onClick={()=>{this.props.Change("cn")}}>China
        </Menu.Item>
        <Menu.Item value="jp" onClick={()=>{this.props.Change("jp")}}>Japan
        </Menu.Item>
        <Menu.Item value="ru" onClick={()=>{this.props.Change("ru")}}>Russia
        </Menu.Item>
        <Menu.Item value="my" onClick={()=>{this.props.Change("my")}}>Malaysia
        </Menu.Item>
        <Menu.Item value="ae" onClick={()=>{this.props.Change("ae")}}>UAE
        </Menu.Item>
        <Menu.Item value="nz" onClick={()=>{this.props.Change("nz")}}>New Zealand
        </Menu.Item>
        <Menu.Item value="fr" onClick={()=>{this.props.Change("au")}}>France
        </Menu.Item>        
        <Menu.Item value="za" onClick={()=>{this.props.Change("za")}}>South Africa
        </Menu.Item>
        <Menu.Item value="gb" onClick={()=>{this.props.Change("gb")}}>United Kingdom
        </Menu.Item>
        <Menu.Item value="us" onClick={()=>{this.props.Change("us")}}>United States
        </Menu.Item>
        </Menu>


      
  </div>
  
)
}}

export default SelectCountry;
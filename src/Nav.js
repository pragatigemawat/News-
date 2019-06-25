import React from 'react';
import 'antd/dist/antd.css';
import {Drawer,Button,Icon} from 'antd';

const { Option } = Select;

class Drawer extends React.Component{
  constructor(props){
    super(props)
  }
  state = { visible: false };

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
    <Button type="primary" onClick={this.showDrawer}>
      <Icon type="bars"/>
    </Button>
    <Row gutter={16}>
    <Col span={12}>
    <Select placeholder="Please select an country" onChange={this.props.Change}>
    <Option value="in">India</Option>
    <Option value="us">United States</Option>
    <Option value="au">Australia</Option>
      <Option value="jp">Japan</Option>
      <Option value="my">Malaysia</Option>
      <Option value="fr">France</Option>
      <Option value="ae">UAE</Option>
      <Option value="nz">New Zealand</Option>
      <Option value="za">South Africa</Option>
      <Option value="gb">United Kingdom</Option>
      <Option value="cn">China</Option>
      <Option value="ru">Russia</Option>
    
  </Select>
  </Col>
  <Col span={12}>
    <Select placeholder="Please select an Source" onChange={this.props.Esource}>
    <Option value="abc">ABC</Option>
    <Option value="the-times-of-india">The Times of India</Option>
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
      <Option value="national-geographic">National Geographic</Option>
      
  </Select>
  
  </Col>
  </Row>
</div>
  )
}
}
export default Drawer;
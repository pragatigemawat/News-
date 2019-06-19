import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { List, Avatar, Icon } from 'antd';
import Header from './Tabs';
import SelectCountry from './News'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Search = Input.Search;

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

class App extends React.Component{

constructor(){
  super()
    this.state = {};
   // this.props.Change={};
   
}

componentDidMount(){
    this.getNews();
}

getNews(){
    
    var url = 'https://newsapi.org/v2/top-headlines?' +'country=in&' +'apiKey=3c441607425442deb9266c094691a026';

    axios.get(url)
    .then((res)=>{
       console.log(res.data.articles)
     this.setState({
         articles : res.data.articles
     })
    })

}


// getSources(){
//   var url = 'https://newsapi.org/v2/sources?'+'apiKey=3c441607425442deb9266c094691a026';
//     axios.get(url)
//     .then((res)=>{
//       console.log(res.data.articles)
//       this.setState({
//         articles : res.data.articles
//       })
//     })


// }
searchNews(search){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=3c441607425442deb9266c094691a026';

    axios.get(url+"&q="+search)
    .then((res)=>{
       console.log(res.data.articles)
     this.setState({
         articles : res.data.articles
     })
    })
}
Change = (event)=>{
  console.log(`selected ${event}`);
  var url = 'https://newsapi.org/v2/top-headlines?' +`country=${event}&` +'apiKey=3c441607425442deb9266c094691a026';

    axios.get(url)
    .then((res)=>{
        console.log(res.data);
        this.setState({
          articles : res.data.articles
        })
    })
  }


render(){
    return (  

        <div>
          <div>
            <h1 className="h1">NewsHunt</h1>
          </div>
          
          {/* <Header></Header> */}
          <Router>   <SelectCountry Change={this.Change}></SelectCountry>      </Router>
            
    <Search placeholder="input search text" onSearch={value => this.searchNews(value)} enterButton />
    <Route path="/country" exact component={SelectCountry}/>

            <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={this.state.articles}
    footer={
      <div>
        <b>Next Page</b> 
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={item.urlToImage}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.url}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
        </div>
        
        
    )
}    


}

export default App; 
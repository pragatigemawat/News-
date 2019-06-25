import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Layout } from 'antd';
import { List, Avatar, Icon } from 'antd';
//import Header from './Tabs';
import SelectCountry from './News';
import SelectSource from './Source'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectCategory from './example';
//import SelectCategory from './example';


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


// // }
// formatDate(date) {

//   var time = new Date(date);

//   var year = time.getFullYear();

//   var day = time.getDate();

//   var hour = time.getHours();

//   var minute = time.getMinutes();

//   var month = time.getMonth() + 1;

//   var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);

//   return composedTime;

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

Esource= (event)=>{
  console.log(`selected ${event}`);
  var url = 'https://newsapi.org/v2/top-headlines?' +`sources=${event}&` +'apiKey=3c441607425442deb9266c094691a026';

    axios.get(url)
    .then((res)=>{
        console.log(res.data);
        this.setState({
          articles : res.data.articles
        })
    })
  }
  Category = (e,i) => {
    //let x = this.state;

    console.log(`selected ${e}`);
       var url = 'https://newsapi.org/v2/top-headlines?country=in&' + `category=${e}&`+ 'apiKey=3c441607425442deb9266c094691a026';
    
         axios.get(url)
         .then((res)=>{
             console.log(res.data);
             
             this.setState({
               articles : res.data.articles
 
    })
  })
}

  // Category= (event)=>{
  //   console.log(`selected ${event}`);
  //   var url = 'https://newsapi.org/v2/top-headlines?' +`country=${event}&`+ `category=${event}&`+ 'apiKey=3c441607425442deb9266c094691a026';
  
  //     axios.get(url + "&q=")
  //     .then((res)=>{
  //         console.log(res.data);
  //         this.setState({
  //           articles : res.data.articles
  //         })
  //     })
  //   }

render(){
    return (  
 
          <div>
          <div>
            <h1 className="h1">NewsHunt</h1>
            <Search placeholder="Search"  style={{ width: 350,marginLeft: 500 }} onSearch={value => this.searchNews(value)} enterButton>
            
             </Search>
          </div>
          <SelectCategory Category={this.Category}></SelectCategory>
          
          
   
         <div className="Row">
          <div className="Col-6">
          <SelectCountry Change={this.Change}></SelectCountry> 
          <SelectSource  Esource={this.Esource}></SelectSource>
          {/* <SelectCategory Category={this.Category}></SelectCategory> */}
        </div>
        </div>
   
        {/* <p>{this.formatDate(.publishedAt)}</p> */}
         <List
    itemLayout="vertical"
    size="medium"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize:4 ,
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
 {/* <Router>
      <div>
        <nav>
          <ul>
           
            <li>
              <Link to="/country/"></Link>
            </li>
            <li>
              <Link to="/source/"></Link>
            </li>
          </ul>
        </nav>
        
        <Route path="/country/" component={this.Change}/>
        <Route path="/source/" component={this.Esource} />
      </div>
    </Router>  */}







        </div> 
        
    )
    
}    


}

export default App; 
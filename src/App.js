import React from 'react';
import './App.css';
import {Cards,Chart,CountryPicker,FooterPage} from './components';
import {fetchData} from './api';

import styles from './App.css';
import imageCovid from './images/corona.jpg'; 

class App extends React.Component{
  state={
    data:{},
    country:''
  }
 async componentDidMount (){
   const fetchDatas =await fetchData();
    this.setState({data:fetchDatas});
  }
  changeCountry =async (country)=>{
    const fetchDatas =await fetchData(country);

    this.setState({data:fetchDatas,country:country});

  }

  render(){
    const {data,country} =this.state;
    //console.log("okay")
    return(
      <div className="container">
 <img className="imgContainer" src={imageCovid} alt="covid" />
<Cards data={data}/>
<CountryPicker changeCountry ={this.changeCountry}/>

<Chart data={data} country={country} />

<FooterPage  />
      </div>
    )
  }
}
export  default App;
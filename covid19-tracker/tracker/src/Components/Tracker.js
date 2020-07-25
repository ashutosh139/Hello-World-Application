import React, { Component } from 'react';
import ReactCountryFlag from "react-country-flag";
import CardsStatusNews from './CardsStatusNews';
import VisualiseCharts from './VisualiseCharts';
import StateWiseDataChart from './StateWiseDataChart';
class Tracker extends Component {
     constructor(){
         super();
         this.state={
             CovidData:[],
             summary:{},
             lastUpdated:"",
             states:[],
             SelectedStateData:[],
             StateName:"",
             GlobalData:{},
             CountriesData:{}

         }
     };
     handleChange=(e)=>{
       //console.log(e.target.value);
    //console.log(this.state.CovidData);
 let info=[]
    this.state.CovidData.map((d=>{
    if(e.target.value===d.loc){
      //console.log(d.totalConfirmed);
     info.push(d.discharged,d.deaths,d.totalConfirmed)
    }

  }))   
  this.setState({SelectedStateData:info,StateName:e.target.value})
  }
     componentDidMount(){
      
     //World Data
      fetch("https://api.covid19api.com/summary")  
     .then(data=>data.json())
        .then(response=>{
        // let myItems = [];
        
         this.setState({GlobalData:response.Global,CountriesData:response.Countries});
        // console.log(this.state.GlobalData);
         //console.log(this.state.CountriesData);  
        });
       
//India Data
      fetch("https://api.rootnet.in/covid19-in/stats.latest")  
      .then(data=>data.json())
         .then(response=>{
          let myItems = [];
          response.data.regional.forEach((item)=>{
            myItems.push(item.loc);
          });
        let states_Wise_Data=response.data.regional;
        let summary=response.data.summary;
        let updated=response.lastRefreshed;
        this.setState({CovidData:states_Wise_Data,
            lastUpdated:updated,
            summary:summary,
            states:myItems
          })    
      });
     }

        render() {
        let a= this.state.SelectedStateData[0];
          let b=this.state.SelectedStateData[1];
         let c=this.state.SelectedStateData[2];
   return (
        
        <div>
 <h2>Covid-19 Tracker-India</h2>
 <div>
   
 <select  style={dropdwn} onChange={this.handleChange}>
         {this.state.states.map(stateName => {
           return (
             <option  key ={stateName}
              value={stateName}> {stateName} </option>
           )
         })}
    </select>
 </div>
  <ReactCountryFlag
        countryCode="IN"
        svg
        style={flagStyle}
        title="US"
    
        />            
    <CardsStatusNews IndiaCasesData={this.state.summary}/>
        <VisualiseCharts ChartData={this.state.summary}  discharged={a} deaths={b} confirmed={c}  />
           
            <StateWiseDataChart  discharged={a} deaths={b} confirmed={c}/>
        </div>
        )
    }
}

const tableStyle={
    marginLeft:"50em",
    marginTop:"-60em",
    backgroundColor:"lightgreen"
}
const flagStyle={ 
    width: '10em',
    height: '10em',
    marginLeft:'1em'
}
const dropdwn={
  marginLeft:"622px"
}

export default Tracker;
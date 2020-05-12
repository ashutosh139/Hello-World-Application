import React, { Component } from 'react';
import imageCovid from './img/Covid19.jpg';
import ReactCountryFlag from "react-country-flag";
import prevention from './data.json';
import CardsStatusNews from './CardsStatusNews';
import VisualiseCharts from './VisualiseCharts';
class Tracker extends Component {
     constructor(){
         super();
         this.state={
             CovidData:{},
             summary:{}

         }
     };

     componentDidMount(){
       
//  fetch("https://api.covid19api.com/summary")
      fetch("https://api.rootnet.in/covid19-in/stats.latest")  
      .then(data=>data.json())
         .then(response=>{
        let states_Wise_Data=response.data.regional;
        let summary=response.data.summary;
        this.setState({CovidData:states_Wise_Data,summary:summary})     
        console.log(states_Wise_Data);
        //console.log(summary);
    });
     }

        render() {
            const pre=prevention.map((d)=>{
            return (
  
            <div>
        <li key={d.text1}>{d.text1}</li>
        <li key={d.text2}>{d.text2}</li>
        <li key={d.text3}>{d.text3}</li>
        <li key={d.text4}>{d.text4}</li>
        <li key={d.text5}>{d.text5}</li>
            </div>
    )  
});
     
    return (
        <div>
  <ReactCountryFlag
        countryCode="IN"
        svg
        style={flagStyle}
        title="US"
        />            
       
        <CardsStatusNews IndiaCasesData={this.state.summary}/>
        <VisualiseCharts ChartData={this.state.summary} />
        <img  src={""} alt=""/>
        <div style={preventionStyle}>
        <u></u>
        <u><i>{}</i></u>
        </div>
        </div>
        )
    }
}
const flagStyle={ 
    width: '10em',
    height: '2em',
    marginLeft:'35em'
}
const preventionStyle={
    marginLeft:"33em",
    marginTop:"-15em"
}
const imgStyle={marginLeft:"49em",
marginTop:"-30em"}
export default Tracker;
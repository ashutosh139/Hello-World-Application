import React, { Component } from 'react';
import {Line, Pie, Doughnut, Bar} from 'react-chartjs-2';;

 class StateWiseDataChart extends Component {
     
    render() {
        const TotalInfected=this.props.confirmed;
        const totalDeaths=this.props.deaths;
        const discharged=this.props.discharged;
        return (
            <div style={cards}>
            <div className="w3-container">
            <div className="w3-panel w3-card" style={{backgroundColor:"#87CEFA"}}><u>Total Infected</u><br/><b>{TotalInfected}</b></div>
            <div style={death} className="w3-panel w3-card-2" ><u>Deaths</u><br/><b>{totalDeaths}</b></div>
            <div style={discharge} className="w3-panel w3-card-4"><u>Discharged</u><br/><b>{discharged}</b></div>
                </div>
                </div>
        )
    }
}
const death={
    marginLeft:"225px",
    width:"128px",
    marginTop:"-39px",
    backgroundColor:"#FA8072"
}
const discharge={
    marginLeft:"500px",
    width:"128px",
    marginTop:"-39px",
    backgroundColor:"#90EE90"
}
const cards={
    
    width:"12em",
    marginLeft:"490px"
}
export default StateWiseDataChart;
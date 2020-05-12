import React, { Component } from 'react'

 class CardsStatusNews extends Component {
    
    render() {
        const TotalInfected=this.props.IndiaCasesData.total;
        const totalDeaths=this.props.IndiaCasesData.deaths;
        //const totalDeaths=this.props.IndiaCasesData.confirmedCasesIndian;
        const discharged=this.props.IndiaCasesData.discharged;
        return (
        <div style={cards}>
        <div className="w3-container">
        <div className="w3-panel w3-card" style={{backgroundColor:"#87CEFA"}}><u>Total Infected</u><br/><b>{TotalInfected}</b></div>
        <div className="w3-panel w3-card-2" style={{backgroundColor:"#FA8072"}}><u>Deaths</u><br/><b>{totalDeaths}</b></div>
        <div className="w3-panel w3-card-4" style={{backgroundColor:"#90EE90"}}><u>Discharged</u><br/><b>{discharged}</b></div>
            </div>
            </div>
        )
    }
}

const cards={
    
    width:"12em",
    marginLeft:""
}
export default CardsStatusNews;
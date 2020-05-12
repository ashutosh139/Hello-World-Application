import React, { Component } from 'react'
import {Line, Pie, Doughnut, Bar} from 'react-chartjs-2';
 class VisualiseCharts extends Component {
    render() {
        const TotalInfected=this.props.ChartData.total;
        const totalDeaths=this.props.ChartData.deaths;
        //const totalDeaths=this.props.IndiaCasesData.confirmedCasesIndian;
        const discharged=this.props.ChartData.discharged;
       const data={
        labels:["Total Infected","Deaths","Discharged"],
        datasets:[
            {
                labels:"Covid-19 Cases-India",
                data:[TotalInfected,totalDeaths,discharged],
                borderColor:['black','black','black'],
                backgroundColor:['#87CEFA','#FA8072','#90EE90']

            }
        ]

       }
      
        return (
            <div>
                <div className="chart" style={chart}>
                <Pie data={data} 
               />
                </div>
            </div>
        )
    }
}

const chart={
    width:"720px",
    marginTop:"-13em"
}
export default VisualiseCharts;

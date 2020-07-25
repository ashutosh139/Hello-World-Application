import React, { Component } from 'react'
import {Line, Pie, Doughnut, Bar} from 'react-chartjs-2';
 class VisualiseCharts extends Component {
    constructor(props){
       super();
    }
    
    
    change(event){
        this.setState({value: event.target.value});
    }
    render() {
        const TotalInfected=this.props.confirmed;
        const totalDeaths=this.props.deaths;
        const discharged=this.props.discharged;
        // const TotalInfected=this.props.ChartData.total;
        //const totalDeaths=this.props.ChartData.deaths;
        //const discharged=this.props.ChartData.discharged;
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
       const options={
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }
      
        return (
            <div>
                
                <div className="chart" style={chart}>
                <Bar  
                options={options}
                data={data}
                 
                redraw />
                </div>
            </div>
        )
    }
}

const chart={
    width:"720px",
    marginTop:"-20em",
    marginLeft:"435px"
}
export default VisualiseCharts;

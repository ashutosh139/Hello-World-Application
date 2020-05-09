import React, { Component } from 'react'
import './meme.css';
 class MemeGenerator extends Component {
    constructor(){
        super();
        this.state={
            topText:"",
            bottomText:"",
            font_Size:"22",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            All_Images:[]
        };
    }
    handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(name,value);
    this.setState({[name]:value});
    }

    handleClick=()=>{
        let randomNumber=Math.floor(Math.random()*this.state.All_Images.length);
        this.setState({randomImg:this.state.All_Images[randomNumber].url});

    }
    componentDidMount(){
      fetch("https://api.imgflip.com/get_memes")
      .then(data=>data.json())
      .then(response=>{
    const {memes}=response.data;
    this.setState({All_Images:memes});
   

      });
    }
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:"green"}}>Welcome to Meme Generator Page</h1>
            <div className="meme-form">
                <input
                name="topText" 
                placeholder="Enter top text here"
                onChange={this.handleChange}
                value={this.state.topText}
                type="text"/>
               
                <br/>
                <input 
                name="bottomText" 
                placeholder="Enter bottom text here"
                onChange={this.handleChange}
                value={this.state.bottomText}
                type="text"/>
                
                <br/>
                <input 
                type="number"
                name="font_Size"
                value={this.state.font_Size}
                onChange={this.handleChange}
                placeholder="Select font Size"
                />
                <br/>
                <button onClick={this.handleClick}>Boom!!!</button>
                </div>
            <div className="meme">
                <h2 
                className="top" style={{fontSize: Number(this.state.font_Size)}}>{this.state.topText}</h2>
                <img 
                download src={this.state.randomImg} 
                alt="No_Image_found" />
                <h2 
                className="bottom" style={{fontSize: Number(this.state.font_Size)}}>{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }
}
export default MemeGenerator;
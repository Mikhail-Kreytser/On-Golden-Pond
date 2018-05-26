import React, { Component } from 'react';
import './App.css';


// import {Col, Card, CardPanel, Row, Input, Icon, Button} from 'react-materialize'
import BoardSizeInput from './Components/BoardSizeInput';
import DuckCardStart from './Components/DuckCardStart';
import NextButton from './Components/NextButton';
import DuckInput from './Components/DuckInput';
import RawInput from './Components/RawInput';
import Board from './Components/Board';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDuckInput: false,
      showSizeInput: true,
      ducks: [
      // {
      //   duckInstructions:"FFFFSFFFFFF",
      //   orientation:"N",
      //   xInit:0,
      //   yInit:0
      // },{
      //   duckInstructions:"PFPFPFPFF",
      //   orientation:"N",
      //   xInit:1,
      //   yInit:2
      // },{
      //   duckInstructions:"FFSFFSFSSF",
      //   orientation:"E",
      //   xInit:3,
      //   yInit:3
      // }
      ],
      xMax: 0,
      yMax: 0,

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitBordSize = this.submitBordSize.bind(this);
    this.submitDuckList = this.submitDuckList.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.submitDuck = this.submitDuck.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  submitBordSize(data){
    this.setState({
      showSizeInput: false,
      showDuckInput: true,
      xMax: data.xMax,
      yMax: data.yMax,
    })
  }

  submitDuckList(duckList,bounds){
    this.setState({
      showSizeInput: false,
      showDuckInput: false,
      xMax:bounds.xBound,
      yMax:bounds.yBound,
      ducks:duckList,
    })
  }

  submitDuck(duck){
    const ducks = this.state.ducks.concat(duck);
    this.setState({
        ducks: ducks
    });
  }

  buttonClick(){
    this.setState({
      showSizeInput: false,
      showDuckInput: false,
    })
  }

  render() {
    return (
      <div className="App">

        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>
        
          <div style={{ textAlign:'center'}}>
            <h2>On Golden Pond</h2>
          </div>
          {this.state.showSizeInput && <BoardSizeInput submitBordSize={this.submitBordSize}/>}
          {this.state.showSizeInput && <RawInput submitBordSize={this.submitBordSize} submitDuckList={this.submitDuckList}/>}
          {!this.state.showSizeInput && this.state.showDuckInput && <DuckInput xMax={this.state.xMax} yMax={this.state.yMax} submitDuck= {this.submitDuck}/>}
          {this.state.ducks.length > 0 && this.state.showDuckInput && <NextButton buttonClick={this.buttonClick}/> }
          {!this.state.showSizeInput && this.state.showDuckInput && 
            this.state.ducks.map((duck, index) =>{
              return <DuckCardStart key={index} duck={duck} button={false}/>
            })
          }
          {!this.state.showSizeInput && !this.state.showDuckInput && <Board yBound={this.state.yMax} xBound={this.state.xMax} ducks={this.state.ducks}/>}


        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="path/to/your/bundle.js"></script>

      </div>
    );
  }
}

export default App;
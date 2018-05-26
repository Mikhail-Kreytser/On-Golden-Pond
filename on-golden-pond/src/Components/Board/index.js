import React from 'react';
import { Square } from '../Square';

import DuckCardStart from '../DuckCardStart'
import DuckCardEnd from '../DuckCardEnd'

import {Row, Col, Input} from 'react-materialize'

import { computeMove } from '../Functions'
import Slider from 'react-rangeslider'

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      grid: Array(this.props.yBound+1).fill().map(x => Array(this.props.xBound+1).fill("+")),
      moveStepperError: "",
      duckMoves:{},
      moveStepper:0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.play = this.play.bind(this);
  }

  handleReset(){
    let newGrid = Array(this.props.yBound+1).fill().map(x => Array(this.props.xBound+1).fill("+"));
    this.setState({grid:newGrid});
  }

  play(duck){
    var duckInstructions = duck.duckInstructions
    var currentOrientation = duck.orientation;
    var currentX = duck.xInit;
    var currentY = duck.yInit;
    var duckMoves = [{
      finalOrientation:currentOrientation,
      finalX:currentX,
      finalY:currentY
    }];
    for(var i = 0; i < duck.duckInstructions.length; i++){
      var output = computeMove(this.props.xBound, this.props.yBound, currentX, currentY ,currentOrientation, duckInstructions.substring(i,i+1), true);
      currentOrientation = output.finalOrientation;
      currentX = output.finalX;
      currentY = output.finalY;
      duckMoves = duckMoves.concat(output);
    }
    this.setState({
      moveStepper : 0,
      duckMoves:duckMoves},this.rubberDucky)

  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if(value >= 0 && value < this.state.duckMoves.length && value !== ""){
      this.setState({
          [name]: value
      },this.rubberDucky);

    }else {
      this.setState({
        moveStepperError: "0 <= val <= "+ this.state.duckMoves.length,
      })
    }
  }

  rubberDucky(){
    let newGrid = Array(this.props.yBound+1).fill().map(x => Array(this.props.xBound+1).fill("+"));
    var currentOrientation = this.state.duckMoves[this.state.moveStepper].finalOrientation
    var currentY = this.state.duckMoves[this.state.moveStepper].finalX
    var currentX = this.state.duckMoves[this.state.moveStepper].finalY
    newGrid[this.props.xBound-currentX][currentY] = currentOrientation

    this.setState({
        grid:newGrid
    });
    console.log(this.state.moveStepper)
  }

  handleClick(y, x){
    console.log('x:' + x)
    console.log('y:' + y)
  }
  render(){
    const style={
             textAlign: "center",
             margin:"auto",
             height: "auto",
             width:"auto",
             border:"1px solid black",
             tableLayout:'fixed',
           };
    return (
      <div style={{ textAlign:'center'}}>
        <Row style={{margin: 'auto', width:"auto"}}>
          <table cellSpacing="0" style={style}>
            <tbody>
              {
                this.state.grid.map((row, i) => { return (
                  <tr key={"row_"+i}>
                    {row.map((col, j) => {
                      return (
                        <Square handleClick={()=>this.handleClick(i,j)} direction={this.state.grid[i][j]} key={i+"_"+j} />
                          )
                        }
                      )
                    }
                  </tr>)
                })
              }
            </tbody>
          </table>
        </Row>
        <Row>
          {this.state.duckMoves.length>0 && <Col s={4} offset="s4">
            <Input 
              style={{ textAlign:'center'}}
              onInput={this.handleInputChange} 
              label="View each step" 
              error={this.state.moveStepperError} 
              value={this.state.moveStepper}
              max={this.state.duckMoves.length-1} 
              type="number" 
              name="moveStepper" 
              min="0" 
              s={12} 
              />
          </Col>}
        </Row>
        <Row>
          <Col s={12} l={6}>
            <h2>
              Input
            </h2>
            {this.props.ducks.map((duck, index) =>{
              return <DuckCardStart key={index} duck={duck} play={this.play}/>
            })}
          </Col>
          <Col s={12} l={6}>
            <h2>
              Output
            </h2>
            {this.props.ducks.map((duck, index) =>{
              return <DuckCardEnd key={index} duck={duck} yBound={this.props.yBound} xBound={this.props.xBound}/>
            })}
          </Col>
        </Row>
        <Row>
          <Col s={12} l={6} >
            <h2>
              Raw Input
            </h2>
            <p>
              {this.props.yBound} {this.props.xBound}
            </p>
            {this.props.ducks.map((duck, index) =>{
              return (
                <div>
                  <p>
                    {duck.xInit} {duck.yInit} {duck.orientation}
                  </p>
                  <p>  
                    {duck.duckInstructions}
                  </p>
                </div>)
            })}
          </Col>
          <Col s={12} l={6}>
            <h2>
              Raw Output
            </h2>
            {this.props.ducks.map((duck, index) =>{
               const state = computeMove(
                this.props.xBound,
                this.props.yBound,
                duck.xInit, 
                duck.yInit, 
                duck.orientation, 
                duck.duckInstructions
              )
              return (
                <div>
                  <p>
                    {state.error && <span>  Duck Fell off the grid ---> </span>}
                    {state.finalX} {state.finalY} {state.finalOrientation}
                  </p>
                </div>
                )
            })}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Board
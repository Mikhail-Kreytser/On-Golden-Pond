import React, { Component } from 'react';

import {Col, CardPanel, Row, Input, Button} from 'react-materialize'

class RawInput extends Component {
	constructor(props){
    super(props);
    this.state = {
      inputError: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value.toUpperCase()
    });
  }

  buttonClick(event){
    var ducks = []
    var data = this.state.rawData

    // Sterilize the input with the use of a regular expression
    var pattern = /^(([01][123456789]|[123456789]|[2][12345])\s([01][0123456789]|[0123456789]|[2][012345])\n)((([01][0123456789]|[0123456789]|[2][012345])\s([01][0123456789]|[0123456789]|[2][012345])\s[N|E|S|W]\n[F|S|P]+\n*)+)$/;
    if(pattern.test(data)){
      this.setState({inputError: ""})

      //Find key points to needed to parse input
      var firstSpace = data.search(' ')
      var firstNewLine = data.search('\n')

      //Get X and Y size of Grid
      var xBound = parseInt(data.substring(0,firstSpace))
      var yBound = parseInt(data.substring(firstSpace+1,firstNewLine))

      //Remove Grid X and Y from data string
      data = data.substring(firstNewLine+1, data.length)

      //Loot untill all ducks are recorded
      while(data.length > 0){

        //Find key points to needed to parse input
        var firstSpace = data.search(' ')
        var firstNewLine = data.search('\n')

        //Get X of duck
        var xInit = parseInt(data.substring(0,firstSpace))
        data = data.substring(firstSpace+1, data.length)

        //Get Y of duck
        var secondSpace = data.search(' ')
        var yInit = parseInt(data.substring(0,secondSpace))

        //Get orientation of duck
        var orientation = data.substring(secondSpace+1,secondSpace+2)
        data = data.substring(firstNewLine-1, data.length)

        var duckInstructions
        var secondNewLine = data.search('\n')

        //If no more input, duckInstructions is read untill the end of data
        //If more input is avalible remove recorded data
        if(secondNewLine === -1){
          duckInstructions = data.substring(0,data.length)
        }else{
          duckInstructions = data.substring(0,secondNewLine)
          data = data.substring(secondNewLine+1, data.length)
        }

        //Create a duck
        var duck = {
          duckInstructions:duckInstructions,
          orientation:orientation,
          xInit:xInit,
          yInit:yInit
        }

        //Add to ducklist
        ducks = ducks.concat(duck)

        //Exit if no more input
        if(secondNewLine === -1) break;
      }
      this.props.submitDuckList(ducks,{xBound,yBound})
    }
    else{
      this.setState({inputError: "Error with input format"})
      console.log("Error with input format")
    }
  }
  render() {
    return (
      <Row>
        <h1>
          -OR-
        </h1>
        <Col s={12} m={6} offset="m3">
          <CardPanel className="blue lighten-5 black-text">
            <Row>
              <h4>
                Raw Input
              </h4>
            </Row>
            <Row style={{paddingBottom:"40px"}}>
              <Col s={10} offset="s1">
                <Input 
                  onChange={this.handleInputChange}
                  error={this.state.inputError}
                  type="textarea"
                  name="rawData"
                  s={12} 
                  />
              </Col>
            </Row>
            <Row>
              <Button className="blue lighten-3 black-text" onClick={this.buttonClick} waves='light'>Submit Raw Input</Button>
            </Row>
            <Row>
              <p>
                This input is very sensitive, raw data needs to be in the correct format.
                Otherwise this form will not submit.
              </p>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default RawInput;
import React, { Component } from 'react';

import {Col, CardPanel, Row, Input} from 'react-materialize'

class DuckInput extends Component {
	constructor(props){
    super(props);
    this.state = {
      duckInstructionsError: "",
      duckInstructions: "",
      orientation : "N",
      xError: "",
      yError: "",
      xInit: "",
      yInit: "",
    };

    this.validateDuckInstructions = this.validateDuckInstructions.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  handleEnter(event){
    const duckInstructions = this.state.duckInstructions;
    const orientation = this.state.orientation;
    const xMax = this.props.xMax;
    const yMax = this.props.yMax;

    //Wait for enter
  	if (event.key === 'Enter') {

	  	//Check if a number is inputed
	  	if (this.state.xInit && this.state.yInit ){

		  	//Change to Int
		  	var xInit = parseInt(this.state.xInit, 10);
		  	var yInit = parseInt(this.state.yInit, 10);

		  	//Checks if xInit and yInit is in bounds
		  	if (xInit >= 0 && xInit <= xMax && yInit >= 0 && yInit <= yMax){

		    	//Removes error msg
          this.setState({
					 xError: "",
					 yError: ""
				  })

          //Checks if duck instructions is null
          if(duckInstructions !== ""){

            //Checks if duck instructions has a error
            if(this.state.duckInstructionsError === ""){
              this.props.submitDuck({xInit, yInit, orientation ,duckInstructions})
              this.setState({
                duckInstructionsError: "",
                duckInstructions: "",
                xError: "",
                yError: "",
                xInit: "",
                yInit: "",
              })
            }
          }
          else{
            this.setState({duckInstructionsError: "Add Instructions"})
          }
		    }
		    else{
		    	this.setState({
  					xError: (xInit >= 0 && xInit <= xMax) ? ""  : `0 <= X <= ${xMax}`,
            yError: (yInit >= 0 && yInit <= yMax) ? ""  : `0 <= Y <= ${yMax}`
				  })
		    }
		  } 
  		else {
  			this.setState({
  				xError: this.state.xInit ? ""  : "Please enter a number",
  				yError: this.state.yInit ? ""  : "Please enter a number"
  			})
  		}
  	}
  }

  validateDuckInstructions(event){
    const target = event.target;
    const value = target.value;

    this.setState({duckInstructions: value.toUpperCase()})

    var pattern = /^[PSF]+$/;
    if(pattern.test(value.toUpperCase())){
      this.setState({duckInstructionsError: ""})
    }
    else{
      if(value === ""){
        this.setState({duckInstructionsError: "Add Instructions"})
      }
      else{
        this.setState({duckInstructionsError: "Invalid Character"})
      }
    }
  }

  render() {
    return (
      <Row>
        <Col s={12} m={8} offset="m2">
          <CardPanel className="blue lighten-5 black-text">
            <Row>
              <Col s={10} offset="s1">
                <Row style={{paddingBottom:"60px",paddingTop:"60px"}}>
                  <Input 
                    onChange={this.handleInputChange} 
                    onKeyPress={this.handleEnter} 
                    label="Inital X Cordinate" 
                    error={this.state.xError} 
                    value={this.state.xInit} 
                    max={this.props.xMax} 
                    type="number" 
                    name="xInit" 
                    min="0" 
                    s={6} 
                    />
                  <Input 
                    onChange={this.handleInputChange} 
                    onKeyPress={this.handleEnter} 
                    label="Inital Y Cordinate" 
                    error={this.state.yError} 
                    value={this.state.yInit} 
                    max={this.props.yMax} 
                    type="number" 
                    name="yInit" 
                    min="0" 
                    s={6} 
                    />
                </Row>
                <Row>
                  <Col s={8} offset="s2">
                    <Input name='orientation' type='radio' value='N' label='North'onChange={this.handleInputChange} checked/>
                    <Input name='orientation' type='radio' value='E' label='East' onChange={this.handleInputChange} />
                    <Input name='orientation' type='radio' value='S' label='South'onChange={this.handleInputChange} />
                    <Input name='orientation' type='radio' value='W' label='West' onChange={this.handleInputChange} />
                  </Col>
                </Row>
                <Row>
                   <Input 
                    error={this.state.duckInstructionsError} 
                    onChange={this.validateDuckInstructions} 
                    value={this.state.duckInstructions} 
                    onKeyPress={this.handleEnter}
                    label="Duck Instructions" 
                    s={12} 
                  />
                </Row>
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default DuckInput;
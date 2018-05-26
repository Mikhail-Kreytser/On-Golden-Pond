import React, { Component } from 'react';

import {Col, CardPanel, Row, Input, Button} from 'react-materialize'

class BoardSizeInput extends Component {
	constructor(props){
    super(props);
    this.state = {
      xMax: "",
      yMax: "",
      xError: "",
      yError: "",
    };

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
  	if (event.key === 'Enter' || event.type === 'click') {
	  	//Check if a number is inputed
	  	if (this.state.xMax && this.state.yMax ){
		  	//Change to Int
		  	var xMax = parseInt(this.state.xMax, 10);
		  	var yMax = parseInt(this.state.yMax, 10);

		  	//Checks if xMax and yMax is in bounds
		  	if (xMax > 0 && xMax <= 25 && yMax > 0 && yMax <= 25){
		    	this.setState({
					xError: "",
					yError: ""
				})
		        this.props.submitBordSize({xMax, yMax});
		    }
		    else{
		    	this.setState({
					xError: (xMax > 0 && xMax <= 25) ? ""  : "0 < X < 26",
					yError: (yMax > 0 && yMax <= 25) ? ""  : "0 < Y < 26"
				})
		    }
		}
		else {
			this.setState({
				xError: this.state.xMax ? ""  : "Please enter a number",
				yError: this.state.yMax ? ""  : "Please enter a number"
			})
		}
	}
  }
    render() {
    return (
      <Row>
        <Col s={12} m={6} offset="m3">
          <CardPanel className="blue lighten-5 black-text">
            <Row>
              <h4>
                Manual UI Input
              </h4>
            </Row>
            <Row style={{paddingBottom:"40px"}}>
              <Col s={10} offset="s1">
                <Input error={this.state.xError} s={6} type="number" min="1" max="25" name="xMax" onChange={this.handleInputChange} onKeyPress={this.handleEnter} label="Max X Cordinate" />
                <Input error={this.state.yError} s={6} type="number" min="1" max="25" name="yMax" onChange={this.handleInputChange} onKeyPress={this.handleEnter} label="Max Y Cordinate" />
              </Col>
            </Row>
            <Row>
              <Button className="blue lighten-3 black-text" onClick={this.handleEnter} waves='light'>Submit Raw Input</Button>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default BoardSizeInput;
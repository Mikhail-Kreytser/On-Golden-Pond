import React from 'react';

import {Col, CardPanel, Row, Button} from 'react-materialize'
import icon from '../../Media/Icon.png'

import { computeMove } from '../Functions'

class DuckCardEnd extends React.Component {
  constructor(props){
    super(props);

    this.state={};
    
  }

  componentDidMount(){
    this.setState(
      computeMove(
        this.props.xBound,
        this.props.yBound,
        this.props.duck.xInit, 
        this.props.duck.yInit, 
        this.props.duck.orientation, 
        this.props.duck.duckInstructions
      )
    )
  }
  render() {
    var color = this.state.error ? "red lighten-5 black-text" : "blue lighten-5 black-text";
    return (
      <Row>
        <Col s={12} m={10} offset="m1">
          <CardPanel className={color}>
            <Row style={{paddingTop:"30px"}}>
              <Col s={12} m={2}>
                <img src={icon} alt="" height="100" width="100"/>
              </Col>
              <Col s={12} m={6} style={{ textAlign:'center'}}>
                <h5>
                  End Cordinates: ({this.state.finalX},{this.state.finalY})
                </h5>
                <h5>
                  End Orientation: ({this.state.finalOrientation})
                </h5>
              </Col>
              {this.state.error && 
                <Col s={12} m={4} style={{ textAlign:'left', fontWeight: 'bold'}}>
                    <p>
                      Woops... {this.state.error}
                    </p>
                </Col>
              }
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default DuckCardEnd;
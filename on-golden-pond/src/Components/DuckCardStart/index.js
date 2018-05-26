import React from 'react';

import {Col, CardPanel, Row, Button} from 'react-materialize'
import icon from '../../Media/Icon.png'

class DuckCardStart extends React.Component {
  render() {
    return (
      <Row>
        <Col s={10} m={10} offset="m1">
          <CardPanel className="blue lighten-5 black-text">
            <Row style={{paddingTop:"30px"}}>
              <Col s={12} m={3}>
                <img src={icon} alt="" height="64" width="64"/>
                <Button className="btn-small" onClick={()=>{this.props.play(this.props.duck)}}>
                  Play
                </Button>
              </Col>
              <Col s={12} m={6} style={{ textAlign:'center'}}>
                <h5>
                  Initial Cordinates: ({this.props.duck.xInit},{this.props.duck.yInit})
                </h5>
                <h5>
                  Initial Orientation: ({this.props.duck.orientation})
                </h5>
              </Col>
              <Col s={12} m={3} style={{ textAlign:'left'}}>
                <p>
                  Instructions: {this.props.duck.duckInstructions}
                </p>
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default DuckCardStart;
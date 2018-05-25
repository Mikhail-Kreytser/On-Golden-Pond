import React from 'react';

import {Col, CardPanel, Row} from 'react-materialize'
import icon from '../../Media/Icon.png'

class DuckCard extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={10} offset="m1">
          <CardPanel className="blue lighten-5 black-text">
            <Row style={{paddingTop:"30px"}}>
              <Col s={12} m={2}>
                <img src={icon} alt="" height="100" width="100"/>
              </Col>
              <Col s={12} m={6} style={{ textAlign:'center'}}>
                <h4>
                  Initial Cordinates: ({this.props.duck.xInit},{this.props.duck.yInit})
                </h4>
                <h4>
                  Initial Orientation: ({this.props.duck.orientation})
                </h4>
              </Col>
              <Col s={12} m={4} style={{ textAlign:'left'}}>
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

export default DuckCard;
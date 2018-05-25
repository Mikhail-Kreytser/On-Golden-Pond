import React from 'react';

import {Row, Button} from 'react-materialize'

class DuckCard extends React.Component {
  render() {
    return (
      <Row>
        <Button className="blue lighten-3 black-text" onClick={this.props.buttonClick} waves='light'>Done!</Button>
      </Row>
    );
  }
}

export default DuckCard;
import { computeMove } from '../Functions'
import React from 'react';

class DuckRawOutput extends React.Component {
  constructor(props){
    super(props);
    this.state = computeMove(
                  this.props.xBound,
                  this.props.yBound,
                  this.props.duck.xInit, 
                  this.props.duck.yInit, 
                  this.props.duck.orientation, 
                  this.props.duck.duckInstructions)
  }

  // Calculates the final position of the ducks
  render() {
    return (
      <div>
        <p>
          {this.state.error && <span>  Duck Fell off the grid ---> </span>}
          {this.state.finalX} {this.state.finalY} {this.state.finalOrientation}
        </p>
      </div>
    );
  }
}

export default DuckRawOutput;
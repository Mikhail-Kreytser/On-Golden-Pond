import React from 'react';

class DuckRawInput extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.duck.xInit} {this.props.duck.yInit} {this.props.duck.orientation}
        </p>
        <p>  
          {this.props.duck.duckInstructions}
        </p>
      </div>
    );
  }
}

export default DuckRawInput;
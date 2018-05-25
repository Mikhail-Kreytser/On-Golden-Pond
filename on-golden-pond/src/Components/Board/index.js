import React from 'react';
import { Square } from '../Square';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'grid':Array(this.props.yBound).fill().map(x => Array(this.props.xBound).fill("+")),
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    let newGrid = Array(this.props.yBound).fill().map(x => Array(this.props.xBound).fill("+"));
    this.setState({'grid':newGrid});
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
    const g = this.state.grid;
    const board = g.map((row, i) => { return (
      <tr key={"row_"+i}>
        {row.map((col, j) => {
          return (
            <Square handleClick={()=>this.handleClick(i,j)} direction={"N"} key={i+"_"+j} />
              )
            }
          )
        }
      </tr>)
    });
    return (
      // <div style={{ textAlign:'center'}}>
        <div style={{margin: 'auto', width:"auto"}}>
          <table cellSpacing="0" style={style}>
            <tbody>
              {board}
            </tbody>
          </table>
        </div>
      // </div>
    )
  }
}

export default Board
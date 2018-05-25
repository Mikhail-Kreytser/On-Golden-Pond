import React from 'react';
import N from '../../Media/N.png'
import E from '../../Media/E.png'
import S from '../../Media/S.png'
import W from '../../Media/W.png'

export class Square extends React.Component{
  render(){
    const imgLocation = "../../Media/" + this.props.direction + ".png";    
    return (
      <td
        style={{
          overflow:'hidden',
          width:'60px',
          height:'60px',
          backgroundColor:'#80C2FF',
          boarderColor: 'black',
          border:".5px solid black"
        }}>
          <img src={imgLocation} alt="" height="50" width="50"/>
      </td>
    )
  }
}

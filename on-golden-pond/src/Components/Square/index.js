import React from 'react';
import N from '../../Media/N.png'
import E from '../../Media/E.png'
import S from '../../Media/S.png'
import W from '../../Media/W.png'

export class Square extends React.Component{
  render(){
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
          {this.props.direction ==='N' && <img src={N} alt="" height="50" width="50"/>}
          {this.props.direction ==='E' && <img src={E} alt="" height="50" width="50"/>}
          {this.props.direction ==='S' && <img src={S} alt="" height="50" width="50"/>}
          {this.props.direction ==='W' && <img src={W} alt="" height="50" width="50"/>}
      </td>
    )
  }
}

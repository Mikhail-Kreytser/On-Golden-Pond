
function computeMove(xBound, yBound, xPosition, yPosition, orientation, duckInstructions, one = false){
  var currentX = xPosition;
  var currentY = yPosition;
  var currentOrientation = orientation;
  var length = one ? 1 : duckInstructions.length;

  for(var i = 0; i < length; i++){
    switch(duckInstructions[i]){
      case 'P':
        switch(currentOrientation){
          case 'N':
            currentOrientation = 'W';
            break;
          case 'E':
            currentOrientation = 'N';
            break;
          case 'S':
            currentOrientation = 'E';
            break;
          case 'W':
            currentOrientation = 'S';
            break;
        }
        break;
      case 'S':
        switch(currentOrientation){
          case 'N':
            currentOrientation = 'E';
            break;
          case 'E':
            currentOrientation = 'S';
            break;
          case 'S':
            currentOrientation = 'W';
            break;
          case 'W':
            currentOrientation = 'N';
            break;
        }
        break;
      case 'F':
        switch(currentOrientation){
          case 'N':
            if(xBound === currentY){
              return {
                error: "The duck fell off the grid. This is the last know position.",
                finalOrientation: currentOrientation,
                finalX: currentX,
                finalY: currentY,
              }
            }else{
              currentY++;
            }
            break;
          case 'E':
            if(yBound === currentX){
              return {
                error: "The duck fell off the grid. This is the last know position.",
                finalOrientation: currentOrientation,
                finalX: currentX,
                finalY: currentY,
              }
            }else{
              currentX++;
            }
            break;
          case 'S':
            if(0 === currentY){
              return {
                error: "The duck fell off the grid. This is the last know position.",
                finalOrientation: currentOrientation,
                finalX: currentX,
                finalY: currentY,
              }
            }else{
              currentY--;
            }
            break;
          case 'W':
            if(0 === currentX){
              return {
                error: "The duck fell off the grid. This is the last know position.",
                finalOrientation: currentOrientation,
                finalX: currentX,
                finalY: currentY,
              }
            }else{
              currentX--;
            }
            break;
        }
        break;
      default:
        console.log("error: Uknown Instruction Input")
        console.log("....=>"+duckInstructions[i])
    }
  }

  return {
    finalOrientation: currentOrientation,
    finalX:currentX,
    finalY:currentY,
  }

}

export { computeMove };
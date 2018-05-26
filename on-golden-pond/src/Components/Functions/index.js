
//Main Logic Function
function computeMove(xBound, yBound, xPosition, yPosition, orientation, duckInstructions, one = false){
  var currentX = xPosition;
  var currentY = yPosition;
  var currentOrientation = orientation;
  var length = one ? 1 : duckInstructions.length;

  //Iterates through the provided instructions
  for(var i = 0; i < length; i++){

    //Read one by one
    switch(duckInstructions[i]){

      //P = Port, Turn left
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

      //S = Starboard, Turn Right
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

      //F = Move Forward
      case 'F':
        switch(currentOrientation){
          case 'N':
            //Checks bounds to make sure the duck is still on the map
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
            //Checks bounds to make sure the duck is still on the map
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
            //Checks bounds to make sure the duck is still on the map
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
            //Checks bounds to make sure the duck is still on the map
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
    }
  }

  return {
    finalOrientation: currentOrientation,
    finalX:currentX,
    finalY:currentY,
  }

}

export { computeMove };
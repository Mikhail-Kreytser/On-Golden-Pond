//Main Logic Function
function computeMove(xBound, yBound, xPosition, yPosition, orientation, duckInstructions){

  // Maintain immutability
  var currentOrientation = orientation;
  var length = duckInstructions.length;
  var currentX = xPosition;
  var currentY = yPosition;
  var boundsError = "";

  // Iterates through the provided instructions
  for(var i = 0; i < length; i++){

    // P = Port, Turn left
    // S = Starboard, Turn Right
    if(duckInstructions[i] === 'P' || duckInstructions[i] === 'S'){

      // Rotates the direction of the duck
      currentOrientation = rotate(currentOrientation, duckInstructions[i])
    }

    // F = Move Forward
    else if(duckInstructions[i] === 'F'){

      // Moves duck forward
      var output = forward(xBound, yBound, currentX, currentY, currentOrientation)

      // Checks for error a message
      if(output.error){
        boundsError = output.error
      }else{
        currentOrientation = output.finalOrientation
        currentX = output.finalX
        currentY = output.finalY
      }
    }

    else{
      console.log("error: Uknown Instruction Input")
    }
    
    // If an error exists return the last position and error 
    if(boundsError){
      return {
        finalOrientation: currentOrientation,
        error: boundsError,
        finalX: currentX,
        finalY: currentY,
      }
    }
  }

  return {
    finalOrientation: currentOrientation,
    finalX:currentX,
    finalY:currentY,
  }

}

// Rotation Logic Function
function rotate(currentOrientation, directionOfRotation){

  // If the direction of rotation is to the left,  the orientation after rotation is in 'W','N','E','S' order 
  // If the direction of rotation is to the right, the orientation after rotation is in 'E','S','W','N' order 
  var orientationAfterRotate = (directionOfRotation === 'P') ? ['W','N','E','S'] : ['E','S','W','N'];

  switch(currentOrientation){
    case 'N':
      currentOrientation = orientationAfterRotate[0];
      break;
    case 'E':
      currentOrientation = orientationAfterRotate[1];
      break;
    case 'S':
      currentOrientation = orientationAfterRotate[2];
      break;
    case 'W':
      currentOrientation = orientationAfterRotate[3];
      break;
    default:
      console.log("Error: Rotate Method Uknown Current Orientation");
  }
  return currentOrientation
}

// Forward Movement Logic Function
function forward(xBound, yBound, currentX, currentY, currentOrientation){
  switch(currentOrientation){
    case 'N':
      currentY++;
      break;
    case 'E':
      currentX++;
      break;
    case 'S':
      currentY--;
      break;
    case 'W':
      currentX--;
      break;
    default:
      console.log("Error: Forward Method Uknown Current Orientation");
    }

  //Checks bounds to make sure the duck is still on the map
  if(0 > currentX || 0 > currentY || yBound < currentX || xBound < currentY){
    return {error: "The duck fell off the grid. This is the last know position."}
  }else{
    return {
      finalOrientation: currentOrientation,
      finalX:currentX,
      finalY:currentY,
    }
  }
}

export { computeMove };
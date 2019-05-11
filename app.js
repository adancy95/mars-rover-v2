// Rover Object Goes Here
// ======================
var roverObj = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [ ]
}
// ======================
function turnLeft(rover){
  // Turns the rover left based on it's current direction
  console.log("turnLeft was called!");
  switch (rover.direction){
    case 'N':
      rover.direction = 'W';
      console.log('The rover is facing West');
      break;
    case 'W':
      rover.direction = 'S';
      console.log('The rover is facing South');
      break;
    case 'S':
      rover.direction = 'E';
      console.log('The rover is facing East');
      break;
    case 'E':
      rover.direction = 'N';
      console.log('The rover is facing North');
      break;
    default:
      console.log("The rover did not move");
  }
}

function turnRight(rover){
  //Turns the rover right based on it's current direction
  console.log("turnRight was called!");
  switch (rover.direction){
    case 'N':
      rover.direction = 'E';
      console.log('The rover is facing East');
      break;
    case 'E':
      rover.direction = 'S';
      console.log('The rover is facing South');
      break;
    case 'S':
      rover.direction = 'W';
      console.log('The rover is facing West');
      break;
    case 'W':
      rover.direction = 'N';
      console.log('The rover is facing North');
      break;
  }
}

function moveForward(rover){
  //Moves the rover forward based on it's current direction and location
  console.log("moveForward was called")
  switch (rover.direction){
    case 'N':
      if(rover.y <10 && rover.y > 0){
        rover.y = rover.y - 1;
        rover.travelLog.push([rover.x, rover.y+1]);
        console.log('The rover is located at (' + rover.x +', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    case 'W':
      if(rover.x <10 && rover.x > 0){
        rover.x = rover.x - 1;
        rover.travelLog.push([rover.x+1, rover.y]);
        console.log('The rover is located at (' + rover.x +', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    case 'S':
      if(rover.y <10 && rover.y >= 0){
        rover.y = rover.y + 1;
        rover.travelLog.push([rover.x, rover.y-1]);
        console.log('The rover is located at (' + rover.x + ', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    case 'E':
      if(rover.x < 10 && rover.x >= 0){
        rover.x = rover.x + 1;
        rover.travelLog.push([rover.x-1, rover.y]);
        console.log('The rover is located at (' + rover.x +', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    default:
      console.log("The rover did not change it's location");
  }
}

function directions(stringOfDirections, rover){
  //Moves the rover based on a set of directions
  for(var i = 0; i < stringOfDirections.length; i++){
    if(['f','b','r','l'].includes(stringOfDirections.charAt(i)) ){
      switch(stringOfDirections.charAt(i)){
        case 'f':
          moveForward(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        case 'b':
          moveBackwards(rover);
          break;
        default:
          console.log("The rover did not change it's direction or location");
      }
    } else{
      console.log('invalid rover move. Try another move like f[forward], b[backwards], l[left], or r[right].')
    }
  }
}

function moveBackwards(rover){
  //Moves the rover backwars based on it's current direction and location
  console.log("moveBackwards was called")
  switch (rover.direction){
    case 'N':
      if(rover.y <10 && rover.y >= 0){
        rover.y = rover.y + 1;
        rover.travelLog.push([rover.x, rover.y-1]);
        console.log('The rover is located at (' + rover.x +', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    case 'W':
      if(rover.x <10 && rover.x >= 0){
        rover.x = rover.x + 1;
        rover.travelLog.push([rover.x -1, rover.y]);
        console.log('The rover is located at (' + rover.x +', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    case 'S':
      if(rover.y <10 && rover.y > 0){
        rover.y = rover.y - 1;
        rover.travelLog.push([rover.x, rover.y + 1]);
        console.log('The rover is located at (' + rover.x + ', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    case 'E':
      if(rover.x < 10 && rover.x > 0){
        rover.x = rover.x - 1;
        rover.travelLog.push([rover.x+1, rover.y]);
        console.log('The rover is located at (' + rover.x +', '+ rover.y + ') facing ' + rover.direction);
      }else{
        console.log('The rover is about to run off the track. Try another direction');
      }
      break;
    default:
      console.log("The rover did not change it's location");
  }
}

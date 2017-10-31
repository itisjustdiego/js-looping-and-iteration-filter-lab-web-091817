// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function(name){
    return name.toLowerCase() === string.toLowerCase()  //Why are we returning twice ???
  });
}

function fuzzyMatch(array, string) {
  return array.filter(function(name){
    return name.slice(0, 1) === string.slice(0, 1)
  });
}

function matchName(array, string) {
  return array.filter(function(name) {
    return name.name === string
  });
}

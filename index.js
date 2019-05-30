// add solution here
function theBeatlesPlay(mus, inst){
  
  var theBeatlesPlayArray = [];
  var i;
  
  for(i = 0; i < mus.length; i++){
   var theBeatlesPlayArrayContents = (mus[i] + " plays " + inst[i])
   theBeatlesPlayArray.push(theBeatlesPlayArrayContents)
  }
  return theBeatlesPlayArray
}


function johnLennonFacts(jLF){
  var i = 0;
  
  while (i < jLF.length){
    jLF[i]=(jLF[i] + "!!!")
    i++
  }
  return jLF;
}


function iLoveTheBeatles(num){
  var beatlesArray = [];
  do {
    beatlesArray[num] = "I love the Beatles!"
    num++
  }
  while (num < 15);
  return beatlesArray
}
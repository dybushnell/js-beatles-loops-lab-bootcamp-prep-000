// add solution here
function theBeatlesPlay(mus, inst){
  
  var firstArray = [];
  var i;
  
  for(i = 0; i < mus.length; i++){
   var firstArrayContents = (mus[i] + " plays " + inst[i])
   firstArray = [...firstArray, firstArrayContents]
   return firstArray
  }
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
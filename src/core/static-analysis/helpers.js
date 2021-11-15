export const transformWithoutBabel = (code) => {
  return (
    `
  function updateProp(parentName, obj){
    Object.keys(obj).map(function(key){
      if (typeof obj[key] != 'object'){
        if(document.getElementById('input-' + parentName + '-' + key) && document.getElementById('input-' + parentName + '-' + key).value != '') {
          var updatedValue = document.getElementById('input-' + parentName + '-' + key).value;
          if(!isNaN(updatedValue)) updatedValue = parseInt(updatedValue, 10);
          obj[key] = updatedValue;
        }
      }
      else{
        obj[key] = updateProp(parentName + '-' + key, obj[key]);
      }
    });
    return obj;
  }
  function restoreHeap(restore){
    let snapshot;
    heap.snapshots.map(element => {
      if(element.timePointId == restore) snapshot = element;
    })
    return snapshot;
  }
  let emptyContinuation = '';
  let emptyContinuationAux = '';

  function addCont(cont, continuations, originalId){
    let counter = 0;
    let id = originalId;
    let startFromNumber = global.startFrom;

    let i = 0;
    while(isNaN(parseInt(startFromNumber))){
        startFromNumber = global.startFrom.slice(i); 
        if (i > global.startFrom.length) break;
        ++i;
    }

    if(i <= global.startFrom.length){
        let startFromName = global.startFrom.slice(0, i-1);
        if( id == 'kont' + startFromName) {
          counter = parseInt(startFromNumber); 
          id = id + (++counter);  
        } 
    }

    while(continuations && continuations[id] && (global.contTimeLine[id] == global.timeLine)){
      id = originalId + (++counter);
    }
    continuations[id] = cont;
    global.contTimeLine[id] = global.timeLine;
  } try{` +
    code +
    `} 
  catch(e){
    emptyContinuation = createContinuation();
    if(emptyContinuationAux) {                
      emptyContinuation = emptyContinuationAux;
    }
    console.error("error", e)
  }
  `
  );
};

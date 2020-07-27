function updateProp(parentName, obj) {
  Object.keys(obj).map(function (key) {
    if (typeof obj[key] != 'object') {
      if (
        document.getElementById('input-' + parentName + '-' + key) &&
        document.getElementById('input-' + parentName + '-' + key).value != ''
      ) {
        var updatedValue = document.getElementById('input-' + parentName + '-' + key).value;
        if (!isNaN(updatedValue)) updatedValue = parseInt(updatedValue, 10);
        obj[key] = updatedValue;
      }
    } else {
      obj[key] = updateProp(parentName + '-' + key, obj[key]);
    }
  });
  return obj;
}
function restoreHeap(restore) {
  let snapshot;
  heap.snapshots.map((element) => {
    if (element.timePointId == restore) snapshot = element;
  });
  return snapshot;
}
emptyContinuation = '';
emptyContinuationAux = '';
contTimeLine = {};
function addCont(cont, continuations, originalId) {
  let counter = 0;
  let id = originalId;
  let startFromNumber = global.startFrom;

  let i = 0;
  while (isNaN(parseInt(startFromNumber))) {
    startFromNumber = global.startFrom.slice(i);
    if (i > global.startFrom.length) break;
    ++i;
  }

  if (i <= global.startFrom.length) {
    let startFromName = global.startFrom.slice(0, i - 1);
    if (id == 'kont' + startFromName) {
      counter = parseInt(startFromNumber);
      id = id + ++counter;
    }
  }

  while (continuations[id] && contTimeLine[id] == global.timeLine) {
    id = originalId + ++counter;
  }
  continuations[id] = cont;
  contTimeLine[id] = global.timeLine;
}
try {
  function createContinuation() {
    return callCC((cont) => cont);
  }

  continuations = {};
  try {
    var evalStrategies = [
      function (degrees) {
        try {
          try {
            return (
              degrees.reduce(function (a, b) {
                return a + b;
              }) / degrees.length
            );

            try {
            } catch (e) {
              if (emptyContinuation) {
                emptyContinuationAux = emptyContinuation;
                emptyContinuation();
              } else {
                throw e;
              }
            }
          } catch (e) {
            if (emptyContinuation) {
              emptyContinuationAux = emptyContinuation;
              emptyContinuation();
            } else {
              throw e;
            }
          }

          try {
          } catch (e) {
            if (emptyContinuation) {
              emptyContinuationAux = emptyContinuation;
              emptyContinuation();
            } else {
              throw e;
            }
          }
        } catch (e) {
          if (emptyContinuation) {
            emptyContinuationAux = emptyContinuation;
            emptyContinuation();
          } else {
            throw e;
          }
        }
      },
    ];

    try {
      function findStrategy(c) {
        if (c == 'Algebra') {
          return 0;
        } else return null;
      }

      function getDegrees(c, s) {
        if (c == 'Algebra' && studentId == '1') {
          return [4, 5, 5, 4];
        }
      }

      function show(data) {
        try {
          try {
            console.log(data);

            try {
            } catch (e) {
              if (emptyContinuation) {
                emptyContinuationAux = emptyContinuation;
                emptyContinuation();
              } else {
                throw e;
              }
            }
          } catch (e) {
            if (emptyContinuation) {
              emptyContinuationAux = emptyContinuation;
              emptyContinuation();
            } else {
              throw e;
            }
          }

          try {
          } catch (e) {
            if (emptyContinuation) {
              emptyContinuationAux = emptyContinuation;
              emptyContinuation();
            } else {
              throw e;
            }
          }
        } catch (e) {
          if (emptyContinuation) {
            emptyContinuationAux = emptyContinuation;
            emptyContinuation();
          } else {
            throw e;
          }
        }
      }

      try {
        var courseName = 'Alggebra';
        var studentId = '1';

        heap.dependencies.map((dependecy) => {
          if (eval('typeof ' + dependecy.name.toString() + "!='undefined'")) {
            tempValueStore[dependecy.name.toString()] = eval(dependecy.name.toString());
          } else {
            tempValueStore[dependecy.name.toString()] = undefined;
          }
        });
        delorean.insertTimepoint('StrategyNotFound', 26);

        var kontStrategyNotFound = createContinuation();
        continuations.kontStrategyNotFound = kontStrategyNotFound;

        if (fromTheFuture) {
          let snapshot = restoreHeap(startFrom);
          dependencies.map((key) => {
            if (typeof snapshot[key.name] != 'function') {
              auxSnapshotValue = ldDeepCopy(snapshot[key.name]);
            } else auxSnapshotValue = snapshot[key.name];

            if (typeof auxSnapshotValue == 'object') {
              updatedObj = updateProp(key.name, auxSnapshotValue);
              eval(key.name + ' = updatedObj');
            } else {
              eval(
                key.name +
                  " = document.getElementById('input-" +
                  key.name +
                  "').value || undefined || auxSnapshotValue;",
              );
            }
          });
          fromTheFuture = false;
        }

        try {
          var evalStrategyId = findStrategy(courseName); //retorna null

          try {
            var evaluations = getDegrees(courseName, studentId);

            try {
              var mean = evalStrategies[evalStrategyId](evaluations); //gatilla error

              try {
                show(mean);

                try {
                } catch (e) {
                  if (emptyContinuation) {
                    emptyContinuationAux = emptyContinuation;
                    emptyContinuation();
                  } else {
                    throw e;
                  }
                }
              } catch (e) {
                if (emptyContinuation) {
                  emptyContinuationAux = emptyContinuation;
                  emptyContinuation();
                } else {
                  throw e;
                }
              }
            } catch (e) {
              if (emptyContinuation) {
                emptyContinuationAux = emptyContinuation;
                emptyContinuation();
              } else {
                throw e;
              }
            }
          } catch (e) {
            if (emptyContinuation) {
              emptyContinuationAux = emptyContinuation;
              emptyContinuation();
            } else {
              throw e;
            }
          }
        } catch (e) {
          if (emptyContinuation) {
            emptyContinuationAux = emptyContinuation;
            emptyContinuation();
          } else {
            throw e;
          }
        }
      } catch (e) {
        if (emptyContinuation) {
          emptyContinuationAux = emptyContinuation;
          emptyContinuation();
        } else {
          throw e;
        }
      }
    } catch (e) {
      if (emptyContinuation) {
        emptyContinuationAux = emptyContinuation;
        emptyContinuation();
      } else {
        throw e;
      }
    }
  } catch (e) {
    if (emptyContinuation) {
      emptyContinuationAux = emptyContinuation;
      emptyContinuation();
    } else {
      throw e;
    }
  }
} catch (e) {
  emptyContinuation = createContinuation();
  if (emptyContinuationAux) {
    emptyContinuation = emptyContinuationAux;
  }
  console.log(e);
}

var $Machine = require('./runtime/vm.js').$Machine;
var $ContinuationExc = require('./runtime/vm.js').$ContinuationExc;
var $Frame = require('./runtime/vm.js').$Frame;
var $DebugInfo = require('./runtime/vm.js').$DebugInfo;var __debugInfo = {"machines":[{"locs":{"0":{"start":{"line":6,"column":26},"end":{"line":6,"column":32}},"2":{"start":{"line":6,"column":26},"end":{"line":6,"column":32}}},"finalLoc":3},{"locs":{"0":{"start":{"line":6,"column":9},"end":{"line":6,"column":33}},"1":{"start":{"line":6,"column":9},"end":{"line":6,"column":15}},"5":{"start":{"line":6,"column":9},"end":{"line":6,"column":15}},"8":{"start":{"line":6,"column":9},"end":{"line":6,"column":33}},"13":{"start":{"line":6,"column":2},"end":{"line":6,"column":34}}},"finalLoc":14},{"locs":{"0":{"start":{"line":5,"column":0},"end":{"line":7,"column":1}},"3":{"start":{"line":1,"column":23},"end":{"line":1,"column":55}},"7":{"start":{"line":1,"column":4},"end":{"line":1,"column":55}},"10":{"start":{"line":2,"column":13},"end":{"line":2,"column":32}},"14":{"start":{"line":2,"column":4},"end":{"line":2,"column":32}},"17":{"start":{"line":3,"column":20},"end":{"line":3,"column":57}},"21":{"start":{"line":3,"column":20},"end":{"line":3,"column":57}},"24":{"start":{"line":3,"column":19},"end":{"line":3,"column":58}},"27":{"start":{"line":3,"column":0},"end":{"line":3,"column":59}},"31":{"start":{"line":4,"column":17},"end":{"line":4,"column":43}},"35":{"start":{"line":4,"column":4},"end":{"line":4,"column":43}},"38":{"start":{"line":8,"column":4},"end":{"line":8,"column":24}},"41":{"start":{"line":9,"column":0},"end":{"line":9,"column":21}},"45":{"start":{"line":10,"column":14},"end":{"line":10,"column":36}},"49":{"start":{"line":10,"column":4},"end":{"line":10,"column":36}},"52":{"start":{"line":11,"column":0},"end":{"line":11,"column":31}},"55":{"start":{"line":12,"column":0},"end":{"line":12,"column":33}},"59":{"start":{"line":13,"column":0},"end":{"line":13,"column":21}},"63":{"start":{"line":14,"column":14},"end":{"line":14,"column":36}},"67":{"start":{"line":14,"column":4},"end":{"line":14,"column":36}},"70":{"start":{"line":15,"column":0},"end":{"line":15,"column":31}},"73":{"start":{"line":16,"column":0},"end":{"line":16,"column":34}},"77":{"start":{"line":17,"column":4},"end":{"line":17,"column":19}},"80":{"start":{"line":18,"column":2},"end":{"line":18,"column":25}},"84":{"start":{"line":20,"column":0},"end":{"line":20,"column":18}}},"finalLoc":88}],"stepIds":[[0,2],[0,5,8,12,13],[0,3,7,10,14,17,21,24,27,31,35,38,41,45,49,52,55,59,63,67,70,73,77,80,84,88]]};
var staticAnalysis_0, init_1, delorean_2, createContinuation_3, continuations_4, kont1_5, kont2_6;

function $__global() {
  var $__next = 0;
  var $__tmpid = 0;
  var $__t1;
  var $__t2;
  var $__t3;

  try {
    if (VM.doRestore) {
      var $__frame = VM.popFrame();
      $__next = $__frame.next;
      var $__child = VM.nextFrame();
      $__tmpid = $__frame.tmpid;

      if ($__child) {
        $__frame.state["$__t" + $__frame.tmpid] = $__child.fn.call($__child.thisPtr);

        if (VM.stepping)
          throw new $ContinuationExc(null, $__frame);
      }

      $__t1 = $__frame.state.$__t1;
      $__t2 = $__frame.state.$__t2;
      $__t3 = $__frame.state.$__t3;
    } else if (VM.stepping)
      throw new $ContinuationExc();

    while (1) {
      if (VM.hasBreakpoints && VM.machineBreaks[2][$__next] !== undefined)
        throw new $ContinuationExc();

      switch ($__next) {
      case 0:
        createContinuation_3 = function $createContinuation_3() {
          if (!VM.running)
            return VM.execute($createContinuation_3, null, this, arguments);

          var $__next = 0;
          var $__tmpid = 0;
          var $__t1;
          var $__t2;
          var $__t3;

          try {
            if (VM.doRestore) {
              var $__frame = VM.popFrame();
              $__next = $__frame.next;
              var $__child = VM.nextFrame();
              $__tmpid = $__frame.tmpid;

              if ($__child) {
                $__frame.state["$__t" + $__frame.tmpid] = $__child.fn.call($__child.thisPtr);

                if (VM.stepping)
                  throw new $ContinuationExc(null, $__frame);
              }

              $__t1 = $__frame.state.$__t1;
              $__t2 = $__frame.state.$__t2;
              $__t3 = $__frame.state.$__t3;
            } else if (VM.stepping)
              throw new $ContinuationExc();

            while (1) {
              if (VM.hasBreakpoints && VM.machineBreaks[1][$__next] !== undefined)
                throw new $ContinuationExc();

              switch ($__next) {
              case 0:
                $__next = 13;
                $__next = 5;
                $__tmpid = 3;
                $__t3 = VM.callCC();
                break;
              case 5:
                $__t2 = $__t3;
                $__next = 8;
                break;
              case 8:
                $__next = 12;
                $__tmpid = 3;

                $__t3 = function $anon1(cont_7) {
                  if (!VM.running)
                    return VM.execute($anon1, null, this, arguments);

                  var $__next = 0;
                  var $__tmpid = 0;
                  var $__t1;

                  try {
                    if (VM.doRestore) {
                      var $__frame = VM.popFrame();
                      cont_7 = $__frame.state.cont_7;
                      $__next = $__frame.next;
                      var $__child = VM.nextFrame();
                      $__tmpid = $__frame.tmpid;

                      if ($__child) {
                        $__frame.state["$__t" + $__frame.tmpid] = $__child.fn.call($__child.thisPtr);

                        if (VM.stepping)
                          throw new $ContinuationExc(null, $__frame);
                      }

                      $__t1 = $__frame.state.$__t1;
                    } else if (VM.stepping)
                      throw new $ContinuationExc();

                    while (1) {
                      if (VM.hasBreakpoints && VM.machineBreaks[0][$__next] !== undefined)
                        throw new $ContinuationExc();

                      switch ($__next) {
                      case 0:
                        $__next = 2;
                        $__t1 = cont_7;
                      case 2:
                        return $__t1;
                      default:
                      case 3:
                        return;
                      case -1:
                        VM.evalResult = eval(VM.evalArg);
                        throw new $ContinuationExc();
                      }

                      if (VM.stepping)
                        throw new $ContinuationExc();
                    }
                  } catch (e) {
                    if (!(e instanceof $ContinuationExc))
                      e = new $ContinuationExc(e);

                    if (!e.reuse) e.pushFrame(new $Frame(0, "anon1", $anon1, $__next, {
                      cont_7: cont_7,
                      $__t1: $__t1
                    }, [{
                      "name": "cont_7",
                      "boxed": false
                    }, {
                      "name": "staticAnalysis_0",
                      "boxed": false
                    }, {
                      "name": "init_1",
                      "boxed": false
                    }, {
                      "name": "delorean_2",
                      "boxed": false
                    }, {
                      "name": "createContinuation_3",
                      "boxed": false
                    }, {
                      "name": "continuations_4",
                      "boxed": false
                    }, {
                      "name": "kont1_5",
                      "boxed": false
                    }, {
                      "name": "kont2_6",
                      "boxed": false
                    }], this, null, $__tmpid));

                    e.reuse = false;
                    throw e;
                  }
                }($__t2);

                break;
              case 12:
                $__t1 = $__t3;
              case 13:
                return $__t1;
              default:
              case 14:
                return;
              case -1:
                VM.evalResult = eval(VM.evalArg);
                throw new $ContinuationExc();
              }

              if (VM.stepping)
                throw new $ContinuationExc();
            }
          } catch (e) {
            if (!(e instanceof $ContinuationExc))
              e = new $ContinuationExc(e);

            if (!e.reuse) e.pushFrame(new $Frame(1, "createContinuation_3", $createContinuation_3, $__next, {
              $__t1: $__t1,
              $__t2: $__t2,
              $__t3: $__t3
            }, [{
              "name": "staticAnalysis_0",
              "boxed": false
            }, {
              "name": "init_1",
              "boxed": false
            }, {
              "name": "delorean_2",
              "boxed": false
            }, {
              "name": "createContinuation_3",
              "boxed": false
            }, {
              "name": "continuations_4",
              "boxed": false
            }, {
              "name": "kont1_5",
              "boxed": false
            }, {
              "name": "kont2_6",
              "boxed": false
            }], this, null, $__tmpid));

            e.reuse = false;
            throw e;
          }
        };

        $__next = 3;
        break;
      case 3:
        $__next = 7;
        $__tmpid = 1;
        $__t1 = require("../src/staticAnalysis");
        break;
      case 7:
        staticAnalysis_0 = $__t1;
        $__next = 10;
        break;
      case 10:
        $__next = 14;
        $__tmpid = 1;
        $__t1 = require("../index");
        break;
      case 14:
        init_1 = $__t1;
        $__next = 17;
        break;
      case 17:
        $__next = 21;
        $__tmpid = 3;
        $__t3 = staticAnalysis_0.dependeciesVisitor();
        break;
      case 21:
        $__t2 = $__t3;
        $__next = 24;
        break;
      case 24:
        $__t1 = [$__t2];
        $__next = 27;
        break;
      case 27:
        $__next = 31;
        $__tmpid = 2;
        $__t2 = init_1(__filename, $__t1);
        break;
      case 31:
        $__next = 35;
        $__tmpid = 1;
        $__t1 = require("../src/delorean");
        break;
      case 35:
        delorean_2 = $__t1;
        $__next = 38;
        break;
      case 38:
        continuations_4 = {};
        $__next = 41;
        break;
      case 41:
        $__next = 45;
        $__tmpid = 1;
        $__t1 = delorean_2.snapshot();
        break;
      case 45:
        $__next = 49;
        $__tmpid = 1;
        $__t1 = createContinuation_3();
        break;
      case 49:
        kont1_5 = $__t1;
        $__next = 52;
        break;
      case 52:
        continuations_4.kont1 = kont1_5;
        $__next = 55;
        break;
      case 55:
        $__next = 59;
        $__tmpid = 1;
        $__t1 = console.log("first continuation");
        break;
      case 59:
        $__next = 63;
        $__tmpid = 1;
        $__t1 = delorean_2.snapshot();
        break;
      case 63:
        $__next = 67;
        $__tmpid = 1;
        $__t1 = createContinuation_3();
        break;
      case 67:
        kont2_6 = $__t1;
        $__next = 70;
        break;
      case 70:
        continuations_4.kont2 = kont2_6;
        $__next = 73;
        break;
      case 73:
        $__next = 77;
        $__tmpid = 1;
        $__t1 = console.log("second continuation");
        break;
      case 77:
        if (!continuations_4) {
          $__next = 84;
          break;
        }

        $__next = 80;
        break;
      case 80:
        $__next = 84;
        $__tmpid = 1;
        $__t1 = continuations_4.kont2();
        break;
      case 84:
        $__next = 88;
        $__tmpid = 1;
        $__t1 = console.log("end");
        break;
      default:
      case 88:
        return;
      case -1:
        VM.evalResult = eval(VM.evalArg);
        throw new $ContinuationExc();
      }

      if (VM.stepping)
        throw new $ContinuationExc();
    }
  } catch (e) {
    if (!(e instanceof $ContinuationExc))
      e = new $ContinuationExc(e);

    if (!e.reuse) e.pushFrame(new $Frame(2, "__global", $__global, $__next, {
      staticAnalysis_0: staticAnalysis_0,
      init_1: init_1,
      delorean_2: delorean_2,
      createContinuation_3: createContinuation_3,
      continuations_4: continuations_4,
      kont1_5: kont1_5,
      kont2_6: kont2_6,
      $__t1: $__t1,
      $__t2: $__t2,
      $__t3: $__t3
    }, [{
      "name": "staticAnalysis_0",
      "boxed": false
    }, {
      "name": "init_1",
      "boxed": false
    }, {
      "name": "delorean_2",
      "boxed": false
    }, {
      "name": "createContinuation_3",
      "boxed": false
    }, {
      "name": "continuations_4",
      "boxed": false
    }, {
      "name": "kont1_5",
      "boxed": false
    }, {
      "name": "kont2_6",
      "boxed": false
    }], this, null, $__tmpid));

    e.reuse = false;
    throw e;
  }
}

var VM = new $Machine();
VM.on('paused', function() { VM.continue() });
VM.on('error', function(e) { console.log('error', e) });
VM.setDebugInfo(new $DebugInfo(__debugInfo));
VM.execute($__global);
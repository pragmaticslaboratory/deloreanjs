var $Machine = require('../unwinder/runtime/vm.js').$Machine;
var $ContinuationExc = require('../unwinder/runtime/vm.js').$ContinuationExc;
var $Frame = require('../unwinder/runtime/vm.js').$Frame;var $DebugInfo = require('../unwinder/runtime/vm.js').$DebugInfo;var __debugInfo = {"machines":[{"locs":{"0":{"start":{"line":5,"column":26},"end":{"line":5,"column":32}},"2":{"start":{"line":5,"column":26},"end":{"line":5,"column":32}}},"finalLoc":3},{"locs":{"0":{"start":{"line":5,"column":9},"end":{"line":5,"column":33}},"1":{"start":{"line":5,"column":9},"end":{"line":5,"column":15}},"5":{"start":{"line":5,"column":9},"end":{"line":5,"column":15}},"8":{"start":{"line":5,"column":9},"end":{"line":5,"column":33}},"13":{"start":{"line":5,"column":2},"end":{"line":5,"column":34}}},"finalLoc":14},{"locs":{"0":{"start":{"line":4,"column":0},"end":{"line":6,"column":1}},"3":{"start":{"line":1,"column":29},"end":{"line":1,"column":61}},"7":{"start":{"line":1,"column":6},"end":{"line":1,"column":80}},"10":{"start":{"line":2,"column":21},"end":{"line":2,"column":40}},"14":{"start":{"line":2,"column":53},"end":{"line":2,"column":75}},"17":{"start":{"line":2,"column":21},"end":{"line":2,"column":76}},"21":{"start":{"line":2,"column":4},"end":{"line":2,"column":76}},"24":{"start":{"line":3,"column":19},"end":{"line":3,"column":45}},"28":{"start":{"line":3,"column":6},"end":{"line":3,"column":45}},"31":{"start":{"line":7,"column":0},"end":{"line":7,"column":5}},"34":{"start":{"line":8,"column":21},"end":{"line":8,"column":43}},"38":{"start":{"line":8,"column":4},"end":{"line":8,"column":43}},"41":{"start":{"line":9,"column":0},"end":{"line":9,"column":33}},"45":{"start":{"line":10,"column":4},"end":{"line":10,"column":18}},"48":{"start":{"line":11,"column":2},"end":{"line":11,"column":18}},"52":{"start":{"line":13,"column":0},"end":{"line":13,"column":18}}},"finalLoc":56}],"stepIds":[[0,2],[0,5,8,12,13],[0,3,7,10,14,17,21,24,28,31,34,38,41,45,48,52,56]]};
var dependeciesVisitor_0, dependencies_1, delorean_2, createContinuation_3, continuation_4;

function $__global() {
  var $__next = 0;
  var $__tmpid = 0;
  var $__t1;
  var $__t2;

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

                $__t3 = function $anon1(cont_5) {
                  if (!VM.running)
                    return VM.execute($anon1, null, this, arguments);

                  var $__next = 0;
                  var $__tmpid = 0;
                  var $__t1;

                  try {
                    if (VM.doRestore) {
                      var $__frame = VM.popFrame();
                      cont_5 = $__frame.state.cont_5;
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
                        $__t1 = cont_5;
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
                      cont_5: cont_5,
                      $__t1: $__t1
                    }, [{
                      "name": "cont_5",
                      "boxed": false
                    }, {
                      "name": "dependeciesVisitor_0",
                      "boxed": false
                    }, {
                      "name": "dependencies_1",
                      "boxed": false
                    }, {
                      "name": "delorean_2",
                      "boxed": false
                    }, {
                      "name": "createContinuation_3",
                      "boxed": false
                    }, {
                      "name": "continuation_4",
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
              "name": "dependeciesVisitor_0",
              "boxed": false
            }, {
              "name": "dependencies_1",
              "boxed": false
            }, {
              "name": "delorean_2",
              "boxed": false
            }, {
              "name": "createContinuation_3",
              "boxed": false
            }, {
              "name": "continuation_4",
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
        dependeciesVisitor_0 = $__t1.dependeciesVisitor;
        $__next = 10;
        break;
      case 10:
        $__next = 14;
        $__tmpid = 1;
        $__t1 = require("../index");
        break;
      case 14:
        $__t1 = [dependeciesVisitor_0];
        $__next = 17;
        break;
      case 17:
        $__next = 21;
        $__tmpid = 2;
        $__t2 = $__t1(__filename, $__t1);
        break;
      case 21:
        dependencies_1 = $__t2;
        $__next = 24;
        break;
      case 24:
        $__next = 28;
        $__tmpid = 1;
        $__t1 = require("../src/delorean");
        break;
      case 28:
        delorean_2 = $__t1;
        $__next = 31;
        break;
      case 31:
        a = 7;
        $__next = 34;
        break;
      case 34:
        $__next = 38;
        $__tmpid = 1;
        $__t1 = createContinuation_3();
        break;
      case 38:
        continuation_4 = $__t1;
        $__next = 41;
        break;
      case 41:
        $__next = 45;
        $__tmpid = 1;
        $__t1 = console.log("first continuation");
        break;
      case 45:
        if (!continuation_4) {
          $__next = 52;
          break;
        }

        $__next = 48;
        break;
      case 48:
        $__next = 52;
        $__tmpid = 1;
        $__t1 = continuation_4();
        break;
      case 52:
        $__next = 56;
        $__tmpid = 1;
        $__t1 = console.log("end");
        break;
      default:
      case 56:
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
      dependeciesVisitor_0: dependeciesVisitor_0,
      dependencies_1: dependencies_1,
      delorean_2: delorean_2,
      createContinuation_3: createContinuation_3,
      continuation_4: continuation_4,
      $__t1: $__t1,
      $__t2: $__t2
    }, [{
      "name": "dependeciesVisitor_0",
      "boxed": false
    }, {
      "name": "dependencies_1",
      "boxed": false
    }, {
      "name": "delorean_2",
      "boxed": false
    }, {
      "name": "createContinuation_3",
      "boxed": false
    }, {
      "name": "continuation_4",
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
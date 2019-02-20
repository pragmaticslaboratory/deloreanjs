var $Machine = require('../unwinder/runtime/vm.js').$Machine;
var $ContinuationExc = require('../unwinder/runtime/vm.js').$ContinuationExc;
var $Frame = require('../unwinder/runtime/vm.js').$Frame;var $DebugInfo = require('../unwinder/runtime/vm.js').$DebugInfo;var __debugInfo = {"machines":[{"locs":{"0":{"start":{"line":3,"column":36},"end":{"line":3,"column":42}},"2":{"start":{"line":3,"column":36},"end":{"line":3,"column":42}}},"finalLoc":3},{"locs":{"0":{"start":{"line":3,"column":19},"end":{"line":3,"column":25}},"4":{"start":{"line":3,"column":19},"end":{"line":3,"column":25}},"7":{"start":{"line":3,"column":19},"end":{"line":3,"column":43}},"11":{"start":{"line":3,"column":2},"end":{"line":3,"column":43}},"14":{"start":{"line":4,"column":2},"end":{"line":4,"column":36}}},"finalLoc":18},{"locs":{"0":{"start":{"line":7,"column":2},"end":{"line":7,"column":29}},"4":{"start":{"line":8,"column":6},"end":{"line":8,"column":20}},"7":{"start":{"line":9,"column":4},"end":{"line":9,"column":20}}},"finalLoc":11},{"locs":{"0":{"start":{"line":2,"column":0},"end":{"line":5,"column":1}},"3":{"start":{"line":6,"column":0},"end":{"line":11,"column":1}},"6":{"start":{"line":12,"column":0},"end":{"line":12,"column":99}}},"finalLoc":9}],"stepIds":[[0,2],[0,4,7,11,14,18],[0,4,7,11],[0,3,6,9]]};
var continuation_0, storeContinuation_1, resumeContinuation_2;

function $__global() {
  var $__next = 0;
  var $__tmpid = 0;

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
    } else if (VM.stepping)
      throw new $ContinuationExc();

    while (1) {
      if (VM.hasBreakpoints && VM.machineBreaks[3][$__next] !== undefined)
        throw new $ContinuationExc();

      switch ($__next) {
      case 0:
        storeContinuation_1 = function $storeContinuation_1() {
          if (!VM.running)
            return VM.execute($storeContinuation_1, null, this, arguments);

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
              if (VM.hasBreakpoints && VM.machineBreaks[1][$__next] !== undefined)
                throw new $ContinuationExc();

              switch ($__next) {
              case 0:
                $__next = 4;
                $__tmpid = 2;
                $__t2 = VM.callCC();
                break;
              case 4:
                $__t1 = $__t2;
                $__next = 7;
                break;
              case 7:
                $__next = 11;
                $__tmpid = 2;

                $__t2 = function $anon1(cont_3) {
                  if (!VM.running)
                    return VM.execute($anon1, null, this, arguments);

                  var $__next = 0;
                  var $__tmpid = 0;
                  var $__t1;

                  try {
                    if (VM.doRestore) {
                      var $__frame = VM.popFrame();
                      cont_3 = $__frame.state.cont_3;
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
                        $__t1 = cont_3;
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
                      cont_3: cont_3,
                      $__t1: $__t1
                    }, [{
                      "name": "cont_3",
                      "boxed": false
                    }, {
                      "name": "continuation_0",
                      "boxed": false
                    }, {
                      "name": "storeContinuation_1",
                      "boxed": false
                    }, {
                      "name": "resumeContinuation_2",
                      "boxed": false
                    }], this, null, $__tmpid));

                    e.reuse = false;
                    throw e;
                  }
                }($__t1);

                break;
              case 11:
                continuation_0 = $__t2;
                $__next = 14;
                break;
              case 14:
                $__next = 18;
                $__tmpid = 1;
                $__t1 = console.log("continuación creada");
                break;
              default:
              case 18:
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

            if (!e.reuse) e.pushFrame(new $Frame(1, "storeContinuation_1", $storeContinuation_1, $__next, {
              $__t1: $__t1,
              $__t2: $__t2
            }, [{
              "name": "continuation_0",
              "boxed": false
            }, {
              "name": "storeContinuation_1",
              "boxed": false
            }, {
              "name": "resumeContinuation_2",
              "boxed": false
            }], this, null, $__tmpid));

            e.reuse = false;
            throw e;
          }
        };

        $__next = 3;
        break;
      case 3:
        resumeContinuation_2 = function $resumeContinuation_2(index_4) {
          if (!VM.running)
            return VM.execute($resumeContinuation_2, null, this, arguments);

          var $__next = 0;
          var $__tmpid = 0;
          var $__t1;

          try {
            if (VM.doRestore) {
              var $__frame = VM.popFrame();
              index_4 = $__frame.state.index_4;
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
              if (VM.hasBreakpoints && VM.machineBreaks[2][$__next] !== undefined)
                throw new $ContinuationExc();

              switch ($__next) {
              case 0:
                $__next = 4;
                $__tmpid = 1;
                $__t1 = console.log(continuation_0);
                break;
              case 4:
                if (!continuation_0) {
                  $__next = 11;
                  break;
                }

                $__next = 7;
                break;
              case 7:
                $__next = 11;
                $__tmpid = 1;
                $__t1 = continuation_0();
                break;
              default:
              case 11:
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

            if (!e.reuse) e.pushFrame(new $Frame(2, "resumeContinuation_2", $resumeContinuation_2, $__next, {
              index_4: index_4,
              $__t1: $__t1
            }, [{
              "name": "index_4",
              "boxed": false
            }, {
              "name": "continuation_0",
              "boxed": false
            }, {
              "name": "storeContinuation_1",
              "boxed": false
            }, {
              "name": "resumeContinuation_2",
              "boxed": false
            }], this, null, $__tmpid));

            e.reuse = false;
            throw e;
          }
        };

        $__next = 6;
        break;
      case 6:
        module.exports = {
          storeContinuation: storeContinuation_1,
          resumeContinuation: resumeContinuation_2
        };

        $__next = 9;
        break;
      default:
      case 9:
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

    if (!e.reuse) e.pushFrame(new $Frame(3, "__global", $__global, $__next, {
      continuation_0: continuation_0,
      storeContinuation_1: storeContinuation_1,
      resumeContinuation_2: resumeContinuation_2
    }, [{
      "name": "continuation_0",
      "boxed": false
    }, {
      "name": "storeContinuation_1",
      "boxed": false
    }, {
      "name": "resumeContinuation_2",
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
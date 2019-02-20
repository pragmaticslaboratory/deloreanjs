var continuation;

function storeContinuation() {
    continuation = callCC(cont => cont);
    console.log("continuación creada")
}

function resumeContinuation(index) {
    console.log(continuation)
    if(continuation){
        continuation();
    }
}

module.exports = {
    storeContinuation,
    resumeContinuation
}
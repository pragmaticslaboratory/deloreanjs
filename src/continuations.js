const continuationsList = []

module.exports = {
    currentContinuation: () => {
        return callCC(cont => cont);
    },

    createContinuation: () => {
        console.log("TO DO: create continuation")
        // continuationsList.push(currentContinuation());
    }
}
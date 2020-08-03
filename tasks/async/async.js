const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");
const {
    connect
} = require("http2");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    const fs = require('fs');
    fs.readFile("./async_api.js", 'utf-8', (err, data) => {
        console.log(data);
    });
}
printDataCallback();
/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    return promiseFunction().then(function (data) {
        console.log(data);
    });
}
//printDataPromise();

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    var result = await promiseFunction();
    console.log(result);
}
//printDataAsyncAwait();

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    const fs = require('fs');
    fs.readFile("./async_api.js", 'utf-8', (err) => {
        if (err != null) throw err;

    });
}
handleErrorCallback();

/**
 * throw error come from promiseFunctionError
 */

function handlePromiseError() {
    return promiseFunctionError().catch(err => {
        throw err;
    });
}
//handlePromiseError();
/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    let response = await promiseFunctionError().catch(err => console.log(err.message));
    //console.log(response);
}
//handleAsyncAwaitError();

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
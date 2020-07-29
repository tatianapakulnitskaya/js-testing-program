const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback(error, callback) {
    console.log(callback);
}
//callbackFunction(printDataCallback);

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    const promise = new Promise((resolve, reject) => {
        resolve(promiseFunction());
    });
    promise.then((res) => {
        console.log(res);
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
function handleErrorCallback(error, result) {
    if (error !== null) {
        console.log(error.message);
        return;
    }
}
//callbackFunctionError(handleErrorCallback);

/**
 * throw error come from promiseFunctionError
 */

function handlePromiseError() {
    const promise1 = new Promise(function (resolve, reject) {
        resolve(promiseFunctionError());
    });
    promise1.catch(function (error) {
        console.log(error.message);
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
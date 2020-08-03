const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback(cb) {
    callbackFunction((err, data) => {
        console.log(data);
    });
}
//printDataCallback();
//function printDataCallback() {
//   const fs = require('fs');
//   fs.readFile("./async_api.js", 'utf-8', (err, data) => {
//       console.log(data);
//   });
//}

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
function handleErrorCallback(cb) {
    callbackFunctionError((err) => {
        if (err) throw err;
    });
}
//handleErrorCallback();
//function handleErrorCallback() {
//   const fs = require('fs');
//   fs.readFile("./async_api.js", 'utf-8', (err) => {
//      if (err) throw err;
//   });
//}

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
    //  let response = await promiseFunctionError().catch(err => console.log(err.message));
    //console.log(response);
    try {
        let response = await promiseFunctionError();
    } catch (err) {
        throw err;
    }
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
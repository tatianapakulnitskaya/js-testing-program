/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'response.json');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(json => {
        const ref = json.filter(item => item.id < 20);
        fs.writeFile(filePath, JSON.stringify(ref, null, 4), err => {
            if (err) throw err;
            console.log('File created');
        });
    });
const { readdirSync } = require('fs');
const { request } = require('http');
const https = require('https');

function evaluateRequest(res) {
    const headers = res.headers;
    if (res.statusCode === 200) {
        const headerDate = headers && headers.date ? headers.date : 'no response date';
        console.log(`Response - Status Code: ${res.statusCode} - Date: ${headerDate}`);
        return true;
    } else {
        console.log(`Request - Status Code ${res.statusCode}`);
        console.log(`API not found. Check URL // ${req.url}`);
        return false;
    } 
}

async function get(url) {
    https.get(url, res => {
        evaluateRequest(res)
        let unparsedData = [];
        res.on('data', chunk => {
            unparsedData.push(chunk);
        })
        res.on('end', () => {
            let parsedData = JSON.parse(Buffer.concat(unparsedData).toString());
        })   
    })   
    
}

module.exports = {
    get
}
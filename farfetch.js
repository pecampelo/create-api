const http = require('http');
const https = require('https');

function warnRequestStatus(res) {
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

function evaluateRequest(clearance) {
    return clearance ? true : false;
}

function receiveFormattedJSON(res) {
    let data = [];
    res.on('data', chunk => {
        data.push(chunk);
    })
    res.on('end', () => {
        let parsedData = JSON.parse(Buffer.concat(data).toString());
        console.log(parsedData);
    });
}  

function getRequest(url) {
    https.get(url, res => {
        let requestStatus = warnRequestStatus(res);
        let permission = evaluateRequest(requestStatus);
        permission === true ? receiveFormattedJSON(res) : console.log('Request not possible');
    });      
}

module.exports = {
    getRequest
}
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

function getRequest(url) {
    this.url = url;
    https.get(url, res => {
        this.url = url;
        this.res = res;
        evaluateRequest(res);
        let data = [];
        let parsedData = [];
        res.on('data', chunk => {
            data.push(chunk);
        })
        res.on('end', () => {
            let parsedData = JSON.parse(Buffer.concat(data).toString());
            return parsedData;
        })   
        console.log(Object.keys(parsedData));
    }
    )      
}

module.exports = {
    getRequest
}
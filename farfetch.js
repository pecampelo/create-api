const https = require('https');

function warnResponseStatus(url, res) {
    const { statusCode, headers} = res;
    if (statusCode === 200) {
        const headerDate = headers && headers.date ? headers.date : 'no response date';
        console.log(`Response sent - ${url} - Status Code: ${statusCode} - Date: ${headerDate}`);
        return true;
    } else {
        console.log(`Response sent - ${url} - Status Code ${statusCode}`);
        console.log(`API not found. Check URL.`);
        return false;
    } 
}

function evaluateRequest(clearance) { return clearance ? true : false; } 

function parse(data) {
    return JSON.parse(Buffer.concat(data).toString());

}

function receiveFormattedJSON(res) {
    let data = [];
    res.on('data', (chunk) => data.push(chunk))
    res.on('end', () => console.log('No more data in response.'));
    setTimeout(() => {
        parse(data);
        console.log(parsedData);
    }, 3000)
    


    // cannot seem to get data from parsedData and store it in server variable;
}  

function get(url) {
    https.get(url, res => {
        let requestStatus = warnResponseStatus(url, res);
        let permission = evaluateRequest(requestStatus);
        permission === true ? receiveFormattedJSON(res) : console.log('Request not possible');
    });      
}

// function post(url) {
//     https.get(url, res => {
//         let requestStatus = warnRequestStatus(res);
//         let permission = evaluateRequest(requestStatus);
//         permission === true ? receiveFormattedJSON(res) : console.log('Request not possible');
//     });      
// }

// function put(url) {
//     https.get(url, res => {
//         let requestStatus = warnRequestStatus(res);
//         let permission = evaluateRequest(requestStatus);
//         permission === true ? receiveFormattedJSON(res) : console.log('Request not possible');
//     });      
// }

// function delet(url) {
//     https.get(url, res => {
//         let requestStatus = warnRequestStatus(res);
//         let permission = evaluateRequest(requestStatus);
//         permission === true ? receiveFormattedJSON(res) : console.log('Request not possible');
//     });      
// }


function request(method, url) {
    if (method === 'get') return get(url);  
    // if (method === 'post') return post(url);  
    // if (method === 'put') return put(url); 
    // if (method === 'delete') return delet(url); 
    else { return `${method} not available. Redo request.`}
}

module.exports = {
    request
}
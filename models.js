function messageNotFound(req, userSocket) {
    const { url, body } = req;
    const mainURL = '/'
    const { method_token, route_token } = userSocket;
    console.log(userSocket)
    return JSON.stringify({
        "message": "Not Found",
        "urlRequested": url,
        "bodyRequest": body,
        "method_token": method_token,
        "route_token": route_token,
        "bodyResponse": `GET method only, and you can try these endpoints: 
        /api , /api/songs , /api/heroes`
    })
}

function messageAllowedRequest(req, userSocket) {
    const { url, body } = req;
    const { method_token, route_token } = userSocket;
    let bodyResponse = 'undefined';
    return JSON.stringify({
        "message": "Welcome to my _____ API!",
        "urlRequested": url,
        "bodyRequest": 'undefined',
        "method_token": method_token,
        "route_token": route_token,
        "bodyResponse": bodyResponse
    })
}

module.exports = {
    messageNotFound,
    messageAllowedRequest
}
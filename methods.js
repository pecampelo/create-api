function methodHandler(req) {
    const { method } = req;
    let method_token = '';
    if (method === 'GET')  return method_token = true;
    if (method !== 'POST' || method === 'PUT' || method === 'DELETE'){         
        method_token = 'possible';
    }
    else { return method_token = false}
}

module.exports = {
    methodHandler
}
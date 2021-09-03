const queryController = (requestInfo, userSocket) => {
  if (requestInfo.request.query !== undefined) return userSocket.entry = 'denied'

  // TODO: Check database for file, 
  //if there is none, 
  // return denied
  // If there is,
  // check for private or public.
  // If public,
  // return allowed;
  // If private and there is an API key,
  // return allowed
  // If private and no API Key or incorrect API Key,
  // return denied;
  // If else
  // return ?

}

const bodyController = (requestInfo, userSocket) => {
  if (requestInfo.request.bodyRequest !== undefined) return userSocket.entry = 'denied'

  // TODO: Check database for file, 
  //if there is none, 
  // return denied
  // If there is,
  // check for private or public.
  // If public,
  // return allowed;
  // If private and there is an API key,
  // return allowed
  // If private and no API Key or incorrect API Key,
  // return denied;
  // If else
  // return ?
}





module.exports = {
  queryController
}
export const chatReduser = async ({id, payload, method}) => {
  const baseURL = 'http://localhost:7777/messages';
  const requestURL = method === 'get' ? baseURL + `?from=${id}` : baseURL;
  const request = await fetch(requestURL, {
    method: method,
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  
  if (!request.ok) {
    throw new Error("Something went wrong!");
  }
  const response = await request.json()
  return response;
}
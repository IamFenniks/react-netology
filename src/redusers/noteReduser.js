export const noteReduser = async ({id, noteData, method}) => {
  const baseURL = "http://localhost:7777/notes/";
  const convertedUrl = method === "delete" ? baseURL + "" + id : baseURL;
  const request = await fetch(convertedUrl, {
    header: {
      "Content-Type": "application/json",
    },
    method: method,
    body: JSON.stringify(noteData),
  });
  
  const response = await request.json();
  return response;
};

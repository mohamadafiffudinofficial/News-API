import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const parseResponse = (response)=>{
    const responseBody = response.data

    return{
        isError : responseBody.status !== 'ok',
        data : responseBody.articles
    }
}

export const http = (method, url) => new Promise((resolve) => {
  axios({
    method,
    url:`${baseUrl}${url}&apiKey=${apiKey}`,
  })
    .then((response) => {
      resolve(parseResponse(response));
    })
    .catch(() => {
      window.location.replace('/404');
    });
});

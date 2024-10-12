import axios from "axios";

export const API_URL="http://localhost:3000" 

export const doApiGet = async (_url) => {
  try {
    let data = await axios.get(_url, {
      headers: {
        'x-api-key': localStorage["bee_lingual_token"],
        'content-type': "application/json"
      }
    });
    return data;
  }
  catch(err){
    console.log(err.response.data);
    throw err
  }
}

export const doApiMethod = async (_url,_method,_body) => {
    try {
      let data = await axios({
        method:_method,
        url:_url,
        data: JSON.stringify(_body),
        headers:{
          'x-api-key': localStorage["bee_lingual_token"],
          'content-type': "application/json"
        }
      });
      return data;
    }
    catch(err){
      console.log(err ,err.response);
      throw err
    }
  }
import axios from "axios";


const url = "http://localhost:5000/api";
const authorization = JSON.parse(localStorage.getItem('userInfo'))
const config = {
    headers: {
      authorization: `Bearer ${authorization && authorization["token"]}`,
    },
};



const getResponse = async (urlParam) =>{
   const reponse = await axios.get(url + urlParam, config)
   return reponse
}


const postResponse = async (urlParam, data)=>{
    const response = await axios.post(url + urlParam, data, config)
    return response
}


export {getResponse, postResponse}



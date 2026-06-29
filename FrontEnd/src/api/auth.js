import axios from "axios"

const baseURL = "https://todo-backend-7p06.onrender.com/api/auth"

//signUp
export const signUp = async (userDetails) => {
    const res = await axios.post(`${baseURL}/signUp` , userDetails)
    return res.data;
}

//login

export const login = async (userDetails) => {
    const res = await axios.post(`${baseURL}/login` , userDetails);
    await localStorage.setItem( "bearerToken" , res.data.token);
    return res.data;
    // console.log(JSON.stringify(res.data.token))
    
}

import axios from "axios"

const baseURL = "http://localhost:3000/api/auth"

//signUp
export const signUp = async (userDetails) => {
    const res = await axios.post(`${baseURL}/signUp` , userDetails)
    return res.data;
}

//login

export const login = async (userDetails) => {
    const res = await axios.post(`${baseURL}/login` , userDetails)
    return (
    res.data,
    // console.log(JSON.stringify(res.data.token))
    await localStorage.setItem( "bearerToken" , res.data.token)
    )
}
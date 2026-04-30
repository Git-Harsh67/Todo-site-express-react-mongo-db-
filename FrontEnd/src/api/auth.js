import axios from "axios"

const baseURL = "http://localhost:3000/api/auth"

//signUp
export const signUp = async (userDetails) => {
    const res = await axios.post(`${baseURL}/signUp` , userDetails)
    return res;
}

//login

export const login = async (userDetails) => {
    const res = await axios.get(`${baseURL}/login` , userDetails)
    return res;
    console.log("yes")
}
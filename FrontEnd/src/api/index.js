const URL = "http://localhost:3000/api/todo"


// create todo
export const create = async (data) => {

    const token = localStorage.getItem("bearerToken")

    const response = await fetch(URL + "/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify(data)

    })

    return response.json()
}

//get all todo 
export const allTodo = async () => {
    const response = await fetch(URL + "/allTodo", {
        method: "GET"
    })
    const data = await response.json();
    return data.todos
}
//get user todo only
export const userTodo = async () => {

    const token = localStorage.getItem("bearerToken")

    const response = await fetch(URL + "/userTodo", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await response.json();

    return data.todos
}

//delete todo
export const delTodo = async (Id) => {
    const response = await fetch(URL + "/del/" + Id, {
        method: "DELETE"
    })
    return response.json()

}

//update todo
export const update = async (Id, data) => {

    const response = await fetch(URL + "/edit/" + Id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })

    return response.json()

}

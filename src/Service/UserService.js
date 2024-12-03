import axios from "axios";

function createUser(user){
    return axios.post("http://127.0.0.1:3000/todolist/createUser", user)

}

function LoginUser (user) {
  return axios.post("http://127.0.0.1:3000/todolist/LoginUser", user)
}

export default {
  createUser, LoginUser
}
import axios from "axios";

function getAllTask(){
    return axios.get("http://127.0.0.1:3000/todolist/readTask/")

}


function addTask(task){
    return axios.post("http://127.0.0.1:3000/todolist/createTask/", task)
}

function deleteTask(task){
    return axios.delete("http://127.0.0.1:3000/todolist/deleteTask/" + task)
}


export default {
    getAllTask, addTask, deleteTask
}

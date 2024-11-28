import axios from "axios";

function getAllTask(){
    return axios.get("http://127.0.0.1:3000/todolist/task/readTask")

}


function addTask(task){
    return axios.post("http://127.0.0.1:3000/todolist/task/createTask", task)
}


export default {
    getAllTask, addTask
}

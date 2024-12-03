import { Card, Container } from "react-bootstrap"
import TaskService from "../Service/TaskService"
import { useEffect, useState } from "react"
import AddTask from "./AddTask"
import Checklist from "../Service/Components/Card"


const HomePage = () => {
    const [tasks, setTasks] = useState([])


    const fetchTasks = async () => {
        try {
            const response = await TaskService.getAllTask()
            setTasks(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])



    return <>

        <AddTask></AddTask>
 
        <div className="bloc-task">
            
            <div className="d-flex flex-column align-items-center mt-4">
                <h2>Tâches à faire</h2>
                <div>
                    {tasks.map((task) => {
                        return <Checklist key={task.id_task} task={task}></Checklist>
                    })}
                </div>

            </div>
            
            <div className="d-flex flex-column align-items-center mt-4">
                <h2>Tâches faites</h2>
                <div>
                    {tasks.map((task) => {
                        return <Checklist key={task.id_task} task={task}></Checklist>
                    })}

                </div>
            </div>
        </div>

    </>




}

export default HomePage;
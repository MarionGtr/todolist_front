import { useState } from "react";
import { Container, InputGroup, Form } from "react-bootstrap"
import TaskService from "../Service/TaskService";
import { toast } from "react-toastify";

const AddTask = () => {
    const [task, setTask] = useState({})

    const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        //bloquer le rafraichissement de la page
        e.preventDefault();
        try {
            const response = await TaskService.addTask(task)
            console.log(response)
            toast.success("Tâche ajoutée avec succès")
        } catch (error) {
            toast.error("Erreur lors de l'ajout de la tâche")
            console.log(error)
            
        }
        console.log(task)
    }


    return <Container className="d-flex flex-column align-items-center mt-3">

        <h1>Ajouter une tâche</h1>

        <Form className="col-8 mt-3" onSubmit={handleSubmit}>
            <InputGroup className="col-10 mt-3">
                <InputGroup.Text id="basic-addon1">Tâches</InputGroup.Text>
                <Form.Control
                    placeholder="libelle"
                    aria-label="libelle"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    name="nom_task"
                />
            </InputGroup>

            <InputGroup className="col-10 mt-3">
                <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                <Form.Control
                    placeholder="description"
                    aria-label="description"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    name="description"
                />
            </InputGroup>

            <InputGroup className="col-10 mt-3 mb-3">
                <InputGroup.Text id="basic-addon1">Utilisateur</InputGroup.Text>
                <Form.Control
                    placeholder="Utilisateur"
                    aria-label="user"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    name="user"
                />
            </InputGroup>
            <Form.Control type="submit" value="Ajouter"></Form.Control>

        </Form>
    </Container>
}

export default AddTask;
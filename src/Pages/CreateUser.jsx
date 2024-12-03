import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import UserService from "../Service/UserService"
import { Container } from 'react-bootstrap';

const createUser = () => {
    const [user, setUser] = useState({})

const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await UserService.createUser(user)
        alert("Inscription réussie!")
        console.log(response)
    } catch (error) {
        console.log(error)
        alert("Erreur lors de l'inscription, veuillez réessayer")
    }
    console.log(user)
    
}

  return <Container className="d-flex flex-column align-items-center mt-3">
   
   <h1>Créer un utilisateur</h1>
   
    <Form action="/createUser" method='POST' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nom</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Saisir un nom"
        onChange={handleChange} required
        name="nom"
        />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control
         type="email"
         placeholder="Saisir une adresse mail" 
         onChange={handleChange} required
         name="mail"
         />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control 
        type="password"
         placeholder="Mot de passe"
         onChange={handleChange} required
         name="mdp"
         />
      </Form.Group>

      <Button variant="primary" type="submit">
        Créer utilisateur
      </Button>
    </Form>
 </Container>

}

export default createUser;
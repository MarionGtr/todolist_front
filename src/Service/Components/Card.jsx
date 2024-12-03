import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TaskService from '../TaskService';



const Checklist = ({ task }) => {

    const reloadPage = () => {
        window.location.reload()
    }

    const supprTask = async () => {
    
        try {
            const response = await TaskService.deleteTask(task)
            reloadPage()
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {['Light'].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="card"
                >
                    <Card.Header className='card-header'>{task.nom_task}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {task.description}

                        <span className='div-btn-card'>
                            <Button variant="outline-success">✓</Button>
                            <Button variant="outline-warning">🖉</Button>
                            <Button variant="outline-danger" onClick={() => supprTask(task.id_task)}>X</Button>
                        </span>
                        </Card.Text>

                    </Card.Body>
                </Card>
            ))}
        </>
    );
}


export default Checklist;
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Checklist = ({ task }) => {
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
                            <div className='div-btn-card'>
                            <Button variant="outline-success">✓</Button>
                            <Button variant="outline-warning">🖉</Button>
                            <Button variant="outline-danger">X</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}


export default Checklist;
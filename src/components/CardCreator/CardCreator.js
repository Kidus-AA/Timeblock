import styles from './CardCreator.module.css'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'
import TodoCard from '../TodoCard'

const CardCreator = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Todo List</Card.Title>
                <div className={styles.listContainer}>
                    <TodoCard todo="Hel"/>
                    <TodoCard todo="Hellasfaso"/>
                    <TodoCard todo="Hellowaefawefawef"/>
                    <TodoCard todo="Hello"/>
                    <TodoCard todo="Task something whatt woeijfa"/>
                </div>
                <Card.Subtitle className="mb-2 text-muted">Add to Daily Tasks</Card.Subtitle>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Add Task"
                    aria-label="Add Task"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-primary" id="button-addon2">
                        Add
                    </Button>
                </InputGroup>
            </Card.Body>
        </Card>
    )
}

export default CardCreator
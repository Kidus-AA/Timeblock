import styles from './CardCreator.module.css'
import { useRef } from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { TaskList, TaskListContainer } from '../../context'
import TodoCard from '../TodoCard'

const CardCreator = () => {
    const [ newTask, setNewTask ] = useState()
    const { tasks, setTasks } = useContext(TaskList)    // get all the tasks stored in the home page
    const listContainer = useRef()

    const getTasks = () => {
        return tasks.map((task, key) => {
            if(task) {
                return <TodoCard key={key} todo={task} deleteTask={deleteTask}/>
            }
        })
    }

    // add new tasks to the tasks within the home page
    const addTask = (e) => {
        e.preventDefault();
        if(newTask && newTask.length < 55) {
            setTasks([...tasks, capitalizeLetters(newTask)])
            e.target.reset()
        }
    }

    const capitalizeLetters = (word) => {
        let capitalized = ""
        let flag = true
        for(const letter of word) {
            if(letter === " ") {
                capitalized += letter
                flag = true
            } else if(letter !== " " && flag) {
                capitalized += letter.toUpperCase()
                flag = false
            } else {
                capitalized += letter
                flag = false
            }
        }
        return capitalized
    }

    const deleteTask = (taskName) => {
        setTasks(tasks.filter(task => task !== taskName))
    }

    const taskInput = (e) => {
        if(e.target.value.length < 55 && e.target.value.trim().length > 0) {
            setNewTask(e.target.value)
        } else {
            setNewTask("")
            // Show error
        }
    }

    return (
        <TaskListContainer.Provider value={listContainer}>
            <Form onSubmit={addTask}>
                <Card className={styles.container}>
                    <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                            <div ref={listContainer} className={styles.listContainer}>
                                { getTasks() }
                            </div>
                        <Card.Subtitle className="mb-2 text-muted">Add to Daily Tasks</Card.Subtitle>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Add Task"
                                aria-label="Add Task"
                                aria-describedby="basic-addon2"
                                onChange={taskInput}
                            />
                            <Button 
                                variant="outline-primary" 
                                id="button-addon2"
                                type="submit"
                            >
                                Add
                            </Button>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </Form>
        </TaskListContainer.Provider>
    )
}

export default CardCreator
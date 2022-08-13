import styles from './Home.modules.css'
import { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TaskList, TaskSchedule } from '../../context'
import CardCreator from '../../components/CardCreator'
import Prioritize from '../../components/Prioritize'
import Schedule from '../../components/Schedule'

const Home = () => {
    // 'Add Confetti', 'Fix Smaller Screen Issues', 'Add Current Time', 'Add Pomodoro Timer', 'Add List Of Completed Tasks', 'Add Text Suggestion', 'Add Localstorage'
    // const [ tasks, setTasks ] = useState(['Add Confetti', 'Fix Smaller Screen Issues', 'Add Current Time', 'Add Pomodoro Timer', 'Add List Of Completed Tasks', 'Add Text Suggestion', 'Add Localstorage'])
    const [ tasks, setTasks ] = useState([...localStorage.getItem('tasks').split(',')])
    const [ highPriority, setHighPriority ] = useState([...localStorage.getItem('highPriority').split(',')])
    const [ lowPriority, setLowPriority ] = useState([...localStorage.getItem('lowPriority').split(',')])
    const [ completedTasks, setCompletedTasks ] = useState([...localStorage.getItem('completedTasks').split(',')])
    const [ scheduledTask, setScheduledTask] = useState("N/A")
    const overlayElt = useRef()

    useEffect(() => {
        localStorage.setItem('tasks', tasks)
        localStorage.setItem('highPriority', highPriority)
        localStorage.setItem('lowPriority', lowPriority)
        localStorage.setItem('completedTasks', completedTasks)
    }, [tasks, highPriority, lowPriority, completedTasks])

    const handleClick = () => {
        const priorityContainerElt = document.getElementById("priorityContainer")
        overlayElt.current.style.opacity = 0
        overlayElt.current.style.zIndex = 0
        priorityContainerElt.style.zIndex = 0
        setScheduledTask("N/A")
    }
    
    return (
        <TaskList.Provider value={{ tasks, setTasks, highPriority, setHighPriority, lowPriority, setLowPriority, completedTasks, setCompletedTasks }}>
            <TaskSchedule.Provider value={{ scheduledTask, setScheduledTask }}>
                <div id="overlay" ref={overlayElt} onClick={handleClick}></div>
                <Container>
                    <Row>
                        <Col md={6} id="leftCol">
                            <CardCreator/>
                            <Prioritize highPriority={highPriority} lowPriority={lowPriority}/>
                        </Col>
                        <Col>
                            <Schedule/>
                        </Col>
                    </Row>
                </Container>
            </TaskSchedule.Provider>
        </TaskList.Provider>
    )
}

export default Home 
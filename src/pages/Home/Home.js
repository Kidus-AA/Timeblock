import styles from './Home.module.css'
import { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TaskList, TaskSchedule } from '../../context'
import CardCreator from '../../components/CardCreator'
import Prioritize from '../../components/Prioritize'
import Schedule from '../../components/Schedule'
import Clickable from '../../components/Clickable'
import Pomodoro from '../Pomodoro'

const Home = () => {
    const [ tasks, setTasks ] = useState(JSON.parse(localStorage.getItem('tasks')))
    const [ highPriority, setHighPriority ] = useState(JSON.parse(localStorage.getItem('highPriority')))
    const [ lowPriority, setLowPriority ] = useState(JSON.parse(localStorage.getItem('lowPriority')))
    const [ completedTasks, setCompletedTasks ] = useState(JSON.parse(localStorage.getItem('completedTasks')))
    const [ scheduledTask, setScheduledTask] = useState("N/A")
    const overlayElt = useRef()

    const [ pomodoro, setPomodoro ] = useState(false)
    const pomodoroOverlay = useRef()

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('highPriority', JSON.stringify(highPriority))
        localStorage.setItem('lowPriority', JSON.stringify(lowPriority))
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
    }, [tasks, highPriority, lowPriority, completedTasks])

    const handleClick = () => {
        const priorityContainerElt = document.getElementById("priorityContainer")
        overlayElt.current.style.opacity = 0
        overlayElt.current.style.zIndex = 0
        priorityContainerElt.style.zIndex = 0
        setScheduledTask("N/A")
    }

    const handleTimer = () => {
        pomodoroOverlay.current = <Pomodoro display={handleRemove}/>
        setPomodoro(true)
    }

    const handleRemove = () => {
        pomodoroOverlay.current = null
        setPomodoro(false)
    }

    const handleLofi = () => {

    }

    const handleReset = () => {
        localStorage.clear()
        setTasks([])
        setHighPriority([])
        setLowPriority([])
        setCompletedTasks([])
    }
    
    return (
        <TaskList.Provider value={{ tasks, setTasks, highPriority, setHighPriority, lowPriority, setLowPriority, completedTasks, setCompletedTasks }}>
            <TaskSchedule.Provider value={{ scheduledTask, setScheduledTask }}>
                <div id="overlay" ref={overlayElt} onClick={handleClick}></div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <CardCreator/>
                            <Prioritize highPriority={highPriority} lowPriority={lowPriority}/>
                        </Col>
                        <Col>
                            <Schedule/>
                            <Row>
                                <Col>
                                    <div onClick={handleTimer}>
                                        <Clickable >Pomodoro Timer</Clickable>
                                    </div>
                                </Col>
                                <Col>
                                    <div onClick={handleLofi}>
                                        <Clickable >Lofi Cafe</Clickable>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div onClick={handleReset}>
                                        <Clickable >Reset</Clickable>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {pomodoroOverlay.current}
            </TaskSchedule.Provider>
        </TaskList.Provider>
    )
}

export default Home 
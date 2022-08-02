import styles from './Home.modules.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardCreator from '../../components/CardCreator'
import Prioritize from '../../components/Prioritize/Prioritize'
import { TaskList } from '../../context'

const Home = () => {
    const [ tasks, setTasks ] = useState(['test1', 'test2', 'working', 'internship', 'applications'])
    const [ deletedTasks, setDeletedTasks ] = useState([])
    const [ highPriority, setHighPriority ] = useState([])
    const [ lowPriority, setLowPriority ] = useState([])

    useEffect(() => {
        setTasks(tasks.filter(task => !deletedTasks.includes(task)))
    }, [deletedTasks])

    return (
        <TaskList.Provider value={{ tasks, setTasks, deletedTasks, setDeletedTasks, highPriority, setHighPriority, lowPriority, setLowPriority }}>
            <Container>
                <Row className={styles.row}>
                    <Col md={6}>
                        <CardCreator/>
                    </Col>
                    <Col>
                        <Prioritize highPriority={highPriority} lowPriority={lowPriority}/>
                    </Col>
                </Row>
            </Container>
        </TaskList.Provider>
    )
}

export default Home 
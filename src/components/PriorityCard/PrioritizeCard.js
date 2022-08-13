import styles from './PrioritizeCard.module.css'
import { Card } from 'react-bootstrap'
import { useContext } from 'react'
import { TaskList } from '../../context'
import PrioritizedTask from '../PrioritizedTask'

const PrioritizeCard = (props) => {
    const { highPriority, setHighPriority, lowPriority, setLowPriority } = useContext(TaskList)

    const getTasks = () => {
        return props.tasks.map((task, key) => {
            if(task) {
                return <PrioritizedTask key={key} todo={task} priority={props.priority} deleteTask={deleteTask}/>
            }
        })
    }

    const deleteTask = (taskName) => {
        if(props.priority === 'High') {
            setHighPriority(highPriority.filter(task => task !== taskName))
        } else if(props.priority === 'Low') {
            setLowPriority(lowPriority.filter(task => task !== taskName))
        }
    }

    return (
        <>
            <Card className={styles.container} style={{ background: props.background }}>
                <Card.Body>
                    <Card.Title>{props.priority} Priority</Card.Title>
                    <div className={styles.listContainer}>
                        { getTasks() }
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default PrioritizeCard
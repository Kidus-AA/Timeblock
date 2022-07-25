import styles from './PrioritizeCard.module.css'
import { Card } from 'react-bootstrap'
import TodoCard from '../TodoCard'

const PrioritizeCard = (props) => {
    const getTasks = () => {
        return props.tasks.map((task, key) => <TodoCard key={key} todo={task}/>)
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
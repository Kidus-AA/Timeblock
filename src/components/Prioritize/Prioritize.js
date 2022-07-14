import styles from './Prioritize.module.css'
import { Card } from 'react-bootstrap'
import PrioritizeCard from '../PriorityCard'

const Prioritize = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Prioritize Tasks</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Drag and drop from daily tasks</Card.Subtitle>
                    <div className={styles.containPriorities}>
                        <PrioritizeCard priority="High" background="#FB7D23"/>
                        <PrioritizeCard priority="Medium" background="#FCAC73"/>
                    </div>
                    <PrioritizeCard priority="Low" background="#FDE8D8"/>
                </Card.Body>
            </Card>
        </>
    )
}

export default Prioritize
import styles from './Prioritize.module.css'
import { Card } from 'react-bootstrap'
import PrioritizeCard from '../PriorityCard'

const Prioritize = (props) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Prioritize Tasks</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Drag and drop from daily tasks</Card.Subtitle>
                    <PrioritizeCard priority="High" tasks={props.highPriority} background="#FB7D23"/>
                    <PrioritizeCard priority="Low" tasks={props.lowPriority} background="#FDE8D8"/>
                </Card.Body>
            </Card>
        </>
    )
}

export default Prioritize
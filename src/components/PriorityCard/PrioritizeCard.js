import styles from './PrioritizeCard.module.css'
import { Card } from 'react-bootstrap'
import TodoCard from '../TodoCard'

const Prioritize = (props) => {
    return (
        <>
            <Card className={styles.container} style={{ background: props.background }}>
                <Card.Body>
                    <Card.Title>{props.priority} Priority</Card.Title>
                    <hr />
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                </Card.Body>
            </Card>
        </>
    )
}

export default Prioritize
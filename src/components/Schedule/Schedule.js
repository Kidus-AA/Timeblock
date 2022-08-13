import styles from './Schedule.module.css'
import { useEffect, useState, useReducer } from 'react'
import { Card } from 'react-bootstrap'
import ScheduleBar from '../ScheduleBar'
import Time from '../../assets/data'

const Schedule = () => {
    const [ data, setData ] = useState(Time.data)
    const [ display, setDisplay ] = useState()
    const [ trigger, setTrigger ] = useState()
    
    const reducer = (state, action) => {
        return {time: state.time + 0.5}
    }
    const [ state, dispatch ] = useReducer(reducer, {time: 0})

    // ISSUE: This is not rendering each time
    useEffect(() => {
        const date = new Date()
        setTimeout(() => {
            dispatch()
        }, (59 - date.getMinutes()) * 60000)
        setDisplay(generateBars())
        console.log(`Next trigger in ${(59 - date.getMinutes()) * 60000}`)
    }, [state.time])

    const generateBars = () => {
        console.log("Generated Bars")
        const date = new Date()
        return data.map((task, key) => { 
            if(`t${date.getHours()}` === task.id) {
                return <ScheduleBar key={key} cursor="true" time={{start: task.start, end: task.end, meridiem: task.meridiem}}/> 
            } else {
                return <ScheduleBar key={key} cursor="false" time={{start: task.start, end: task.end, meridiem: task.meridiem}}/> 
            }
        }) 
    }

    return (
        <Card className={styles.container}>
            <Card.Body>
                <Card.Title>Scheduler</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Click on prioritized tasks to schedule time</Card.Subtitle>
                <div className={styles.time_block_container}>
                    { display }
                </div>
            </Card.Body>
        </Card>
    )
}

export default Schedule
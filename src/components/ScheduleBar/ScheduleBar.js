import { useContext, useState, useRef } from 'react'
import styles from './ScheduleBar.module.css'
import { Card, Popover, OverlayTrigger } from 'react-bootstrap'
import { TaskSchedule } from '../../context'
import TimeCursor from '../TimeCursor'

const ScheduleBar = (props) => {
    const [ assignedTask, setAssignedTask ] = useState("N/A")
    const { scheduledTask } = useContext(TaskSchedule)
    const scheduleContainer = useRef()
    const timeCursor = useRef()

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Task</Popover.Header>
            <Popover.Body>
              <strong>{assignedTask}</strong>
            </Popover.Body>
          </Popover>
      );

    const handleClick = () => {
        if(scheduledTask !== "N/A") {
            let taskName = scheduledTask.slice(0, scheduledTask.lastIndexOf(":"))
            let taskVal = scheduledTask.slice(scheduledTask.lastIndexOf(":") + 1)
            if(taskVal === 'High') {
                scheduleContainer.current.style.backgroundColor = "#FB7D23"
            } else if(taskVal === 'Low') {
                scheduleContainer.current.style.backgroundColor = "#FDE8D8"
            }
            setAssignedTask(taskName)
        } else {
            setAssignedTask("N/A")
            scheduleContainer.current.style.backgroundColor = ""
        }
    }

    const showTimeCursor = () => {
        if(props.cursor === 'true') {
            return <div className={styles.cursor} ref={timeCursor}><TimeCursor/></div>
        }
    }

    return (
        <>
            <div className={styles.container} onClick={handleClick}>
                { showTimeCursor() }
                <OverlayTrigger  placement="top" delay={{show: 250}} overlay={popover}>
                    <Card className={styles.time_block} ref={scheduleContainer}>
                        <Card.Subtitle><p className={styles.text}>{props.time.start}</p></Card.Subtitle>
                        <Card.Subtitle className={`${styles.meridiem} text-muted`}>{props.time.meridiem}</Card.Subtitle>
                        <Card.Subtitle><p className={styles.text}>{props.time.end}</p></Card.Subtitle>
                    </Card>
                </OverlayTrigger>
            </div>
        </>
    )
}

export default ScheduleBar
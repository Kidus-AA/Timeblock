import { useContext, useEffect, useRef } from 'react'
import styles from './PrioritizedTask.module.css'
import { Form } from 'react-bootstrap'
import closePNG from '../../assets/delete_black.png'
import { TaskSchedule, TaskList } from '../../context'
import confetti from 'canvas-confetti'

const PrioritizedTask = (props) => {
    const todoBox = useRef()
    const boxChecked = useRef()    // box is checked or not
    const check = useRef()         // checkmark checker and unchecker
    const { scheduledTask, setScheduledTask } = useContext(TaskSchedule)
    const { completedTasks, setCompletedTasks } = useContext(TaskList)

    useEffect(() => {
        if(completedTasks.includes(boxChecked.current.innerText)) {
            check.current.checked = true
            boxChecked.current.style.textDecoration = "line-through"
        }
    }, [])

    const handleDelete = () => {
        props.deleteTask(todoBox.current.innerText)
    }

    const handleClick = (e) => {
        const checked = boxChecked.current.style.textDecoration;
        if(!checked) {
            boxChecked.current.style.textDecoration = "line-through"
            confetti({
                particleCount: 75,
                spread: 360,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2
                }
            })
            setCompletedTasks([...completedTasks, boxChecked.current.innerText])
        } else {
            boxChecked.current.style.textDecoration = "";
            setCompletedTasks(completedTasks.filter(task => task !== boxChecked.current.innerText))
        }
    }

    const handleScheduler = (e) => {
        if(e.target instanceof HTMLImageElement) {
            handleDelete()
        } else if(e.target instanceof HTMLInputElement) {
            handleClick()
        } else {
            const overlayElt = document.getElementById("overlay")
            const priorityContainerElt = document.getElementById("priorityContainer")
            
            if(!overlayElt.style.opacity || overlayElt.style.opacity === "0") {
                overlayElt.style.opacity = 0.4
                overlayElt.style.zIndex = 3
                priorityContainerElt.style.zIndex = 3
                setScheduledTask(`${props.todo}:${props.priority}`)
            }
        }
    }

    return (
        <div className={styles.container} ref={todoBox} onClick={handleScheduler}>
            <Form.Check type="checkbox" ref={check} />
            <div ref={boxChecked} className={styles.todo}><h5>{props.todo}</h5></div>
            <div className={styles.delete} onClick={handleDelete}>
                <img className={styles.delete_undraggable} src={closePNG} alt="Delete todo" width="20px"></img>
            </div>
        </div>
    )
}

export default PrioritizedTask
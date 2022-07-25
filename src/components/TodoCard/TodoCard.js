import { useRef, useContext } from 'react'
import styles from './TodoCard.module.css'
import Draggable from 'react-draggable'
import { Form } from 'react-bootstrap'
import { TaskListContainer, TaskList } from '../../context'
import closePNG from '../../assets/delete.png'

const TodoCard = (props) => {
    const todoBox = useRef()
    const boxChecked = useRef()    // box is checked or not
    const check = useRef()         // checkmark checker and unchecker
    const taskContain = useRef()

    const container = useContext(TaskListContainer)
    const { highPriority, setHighPriority, lowPriority, setLowPriority } = useContext(TaskList)

    const handleClick = () => {
        const checked = boxChecked.current.style.textDecoration;
        if(!checked) {
            boxChecked.current.style.textDecoration = "line-through";
            check.current.checked = true;
        } else {
            boxChecked.current.style.textDecoration = "";
            check.current.checked = false;
        }
    }

    const handleStop = (e) => {
        if(e.target instanceof HTMLImageElement) {
            handleDelete()
        } else {

            console.log(e.clientX + " " + e.clientY)    // HINT: we can get the size of the window
            setHighPriority([...highPriority, todoBox.current.innerText])   
            // TODO: can set where it was placed here
            // TODO: Get the window size when it resizes

            container.current.removeChild(taskContain.current)
            todoBox.current.style.transform = ""
        }
    }

    const handleDelete = () => {
        props.deleteTask(todoBox.current.innerText)
        taskContain.current.removeChild(todoBox.current)
    }

    return (
        <div ref={taskContain}>
            <Draggable
                nodeRef={todoBox}
                onStop={e => handleStop(e)}
            >
                    <div className={styles.container} ref={todoBox}>
                        <Form.Check type="checkbox" ref={check} onClick={handleClick}/>
                        <div ref={boxChecked} className={styles.todo}><h5>{props.todo}</h5></div>
                        <div className={styles.delete}>
                            <img src={closePNG} alt="Delete todo" width="20px" onClick={handleStop}></img>
                        </div>
                    </div>
            </Draggable>
        </div>
        
    )
}

export default TodoCard
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

    const handleStop = (e) => {
        if(e.target instanceof HTMLImageElement) {
            handleDelete()
        } else if(e.target instanceof HTMLInputElement) {} 
          else {
            const windowWidth = window.innerWidth

            const highPriorityBox = document.getElementById("highBox").getBoundingClientRect()
            const containerBox = container.current.getBoundingClientRect()

            if(windowWidth > 767) {
                if((e.clientX / windowWidth) > 0.5) {
                    if(e.clientY > highPriorityBox.bottom) {
                        setLowPriority([...lowPriority, todoBox.current.innerText]) 
                    } else {
                        setHighPriority([...highPriority, todoBox.current.innerText]) 
                    } 
                    container.current.removeChild(taskContain.current)
                } else {
                    container.current.removeChild(taskContain.current)
                    container.current.appendChild(taskContain.current)
                }
            } else {
                if(e.clientY > containerBox.bottom) {
                    if(e.clientY > highPriorityBox.bottom) {
                        setLowPriority([...lowPriority, todoBox.current.innerText]) 
                    } else {
                        setHighPriority([...highPriority, todoBox.current.innerText]) 
                    } 
                    container.current.removeChild(taskContain.current)
                } else {
                    container.current.removeChild(taskContain.current)
                    container.current.appendChild(taskContain.current)
                }
            }
        }
    }

    const handleDelete = () => {
        props.deleteTask(todoBox.current.innerText)
    }

    const handleClick = (e) => {
        const checked = boxChecked.current.style.textDecoration;
        if(!checked) {
            boxChecked.current.style.textDecoration = "line-through";
            check.current.checked = true;
        } else {
            boxChecked.current.style.textDecoration = "";
            check.current.checked = false;
        }
    }

    return (
        <div ref={taskContain}>
            <Draggable
                nodeRef={todoBox}
                onStop={e => handleStop(e)}
                position={{x: 0, y: 0}}
            >
                    <div className={styles.container} ref={todoBox}>
                        <Form.Check type="checkbox" ref={check} onClick={handleClick}/>
                        <div ref={boxChecked} className={styles.todo}><h5>{props.todo}</h5></div>
                        <div className={styles.delete}>
                            <img className={styles.test} src={closePNG} alt="Delete todo" width="20px"></img>
                        </div>
                    </div>
            </Draggable>
        </div>
        
    )
}

export default TodoCard
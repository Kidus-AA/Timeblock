import { useEffect, useRef } from 'react'
import styles from './TodoCard.module.css'
import { Form } from 'react-bootstrap'
import closePNG from '../../assets/delete.png'

const TodoCard = (props) => {
    const todoBox = useRef()
    const boxChecked = useRef()
    const check = useRef()

    useEffect(() => {
        todoBox.current.addEventListener('mousedown', mouseDownHandler)
    }, [])

    const mouseDownHandler = (e) => {
        console.log(todoBox);

        todoBox.current.addEventListener('mousemove', mouseMoveHandler)
    }

    const mouseMoveHandler = (e) => {
        console.log(e.clientX + " MEE")
    }

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

    return (
        <div className={styles.container} onClick={handleClick} ref={todoBox}>
            <Form.Check type="checkbox" ref={check}/>
            <div ref={boxChecked} className={styles.todo}><h5>{props.todo}</h5></div>
            <div className={styles.delete}>
                <img src={closePNG} alt="Delete todo" width="20px"></img>
            </div>
        </div>
    )
}

export default TodoCard
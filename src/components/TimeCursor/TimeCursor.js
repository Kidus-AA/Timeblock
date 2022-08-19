import styles from './TimeCursor.module.css'
import { useRef, useEffect, useReducer } from 'react'

const TimeCursor = () => {
    const cursor = useRef()

    const reducer = (state, action) => {
        switch(action) {
            case 'reset':
                return { time: 0 }
            case 'increment':
                return { time: state.time + 0.005 }
            default:
                return { time: 0 }
        }
    }
    const [ state, dispatch ] = useReducer(reducer, { time: 0 })

    useEffect(() => {
        setTimeout(() => {
            dispatch('increment')
            cursor.current.style = `transform: translate(${state.time}px, 0px)`
        }, 1000)
    }, [state.time])

    return (
        <div className={styles.container} ref={cursor}>
            <div className={styles.edge}></div>
            <div className={styles.time_cursor}></div>
            <div className={styles.edge}></div>
        </div>
    )
}

export default TimeCursor
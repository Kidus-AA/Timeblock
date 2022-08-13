import styles from './TimeCursor.module.css'

const TimeCursor = () => {
    return (
        <div className={styles.container}>
            <div className={styles.edge}></div>
            <div className={styles.time_cursor}></div>
            <div className={styles.edge}></div>
        </div>
    )
}

export default TimeCursor
import styles from './Clickable.module.css'

const Clickable = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Clickable
import styles from './Pomodoro.module.css'
import { useRef } from 'react'
import { Card, Tabs, Tab, Button, ButtonGroup } from 'react-bootstrap'
import closePNG from '../../assets/close.png'

const Pomodoro = (props) => {
    const pomodoroOverlay = useRef()

    const handleClick = () => {
        props.display()
    }
    
    return (
        <div className={styles.container} ref={pomodoroOverlay}>
            <div className={styles.delete} onClick={handleClick}>
                <img className={styles.delete_undraggable} src={closePNG} alt="Delete todo" width="55px"></img>
            </div>
            <Card className={styles.content_container}>
                <Card.Body>
                    <Card.Title>Pomodoro Timer</Card.Title>
                    <Tabs
                    defaultActiveKey="pomodoro"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                        <Tab eventKey="pomodoro" title="Pomodoro">
                            <div className={styles.tab_container}>
                                <ButtonGroup size="lg" className="mb-2">
                                    <Button>15</Button>
                                    <Button>30</Button>
                                    <Button>45</Button>
                                    <Button>60</Button>
                                </ButtonGroup>
                            </div>
                        </Tab>
                        <Tab eventKey="break" title="Break">
                            <div className={styles.tab_container}>
                                <ButtonGroup size="lg" className="mb-2">
                                    <Button>5</Button>
                                    <Button>10</Button>
                                    <Button>15</Button>
                                    <Button>20</Button>
                                </ButtonGroup>
                            </div>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pomodoro
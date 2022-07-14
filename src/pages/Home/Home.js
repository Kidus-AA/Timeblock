import styles from './Home.modules.css'
import { Container, Row, Col } from 'react-bootstrap'
import TodoCard from '../../components/TodoCard'
import CardCreator from '../../components/CardCreator'
import Prioritize from '../../components/Prioritize/Prioritize'

const Home = () => {
    return (
        <Container>
            <Row className={styles.row}>
                <Col md={6}>
                    HELLO THERE
                </Col>
                <Col>
                    <Prioritize />
                    <CardCreator />
                </Col>
            </Row>
        </Container>
    )
}

export default Home 
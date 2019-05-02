import React, {Component} from 'react'
import { Card, Button, Row, Col, CardTitle, Container } from 'react-materialize';
import { Link } from "react-router-dom";
import "./Subject.css"

class Subject extends Component {
    constructor(props){
        super(props)
        this.state = {
            subjects: [
                {
                    name: "math",
                    info: "huhuhu",
                    quizzes: ["/math/quiz"],
                    icon: "math.png"
                },
                {
                    name: "science",
                    info: "huhuhu",
                    quizzes: ["/math/quiz"],
                    icon: "math.png"
                }
            ]
        }
    } 

    render(){
        return(
            <Container id="subjects">
                <Row>
                    {this.state.subjects.map((subject, i)=>(
                        <Col m={6} s={12} l={4} key={i} >
                        {(subject.name === "math") ? 
                            <Card header={<img src={`./assets/img/subjects/${subject.icon}`} />} title={subject.name} reveal={
                                <ul>
                                    {subject.quizzes.map((quiz, i)=>(
                                        <li key={i}>
                                            <Link to={quiz}>Multiplication Speedtest</Link>
                                        </li>
                                    ))}
                                </ul>
                            }>
                                <p>
                                    {subject.info}
                                </p>
                            </Card>
                            : 
                            <Card header={<img src={`./assets/img/subjects/${subject.icon}`} />} title={subject.name}>
                                <p>{subject.info}</p>
                                <p>Coming Soon!</p>
                            </Card>
                        }
                            
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        )
    }
}

export default Subject;
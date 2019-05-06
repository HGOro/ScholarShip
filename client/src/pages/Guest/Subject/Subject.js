import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Subject.css";
import styled from "styled-components";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImageHeader,
    CardText,
    CardTitle,
  } from 'styled-card-component';
   
  

  const MathCard = (props) => (
    <Card>
      <CardImageHeader src="./img/art" />
      <CardBody>
        <CardText>
          Math
        </CardText>
        <CardFooter>
          Facts, Quizzes, and More
        </CardFooter>
      </CardBody>
    </Card>
  );




class Subject extends Component {
    constructor(props){
        super(props)
        this.state = {
            subjects: [
                {
                    name: "Math",
                    info: "Facts, Quizzes, and More",
                    quizzes: [{url:"/math", text:"Times Tables"}],
                    icon: "math.png"
                },
                {
                    name: "Reading",
                    info: "Words, Stories, and More",
                    icon: "reading.png"
                },
                {
                    name: "Writing",
                    info: "Build Words and Sentences",
                    icon: "writing.png"
                },
                {
                    name: "Science",
                    info: "How the World Works",
                    icon: "science.png"
                },
                {
                    name: "History",
                    info: "Past to Present",
                    icon: "history.png"
                },
                {
                    name: "Art",
                    info: "Expression and Exploration",
                    icon: "art.png"
                }
            ]
        }
    } 

    render(){
        return(
            <container id="subjects">
                <row>
                    {this.state.subjects.map((subject, i)=>(
                        <col m={6} s={12} l={4} key={i} >
                        {(subject.name === "Math") ? 
                            <Card header={<img src={`./assets/img/subjects/${subject.icon}`} />} title={subject.name} 
                            reveal={
                                <ul>
                                    {subject.quizzes.map((quiz, i)=>(
                                        <li key={i}>
                                            <Link to={quiz.url}>{quiz.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            }>
                                <p>
                                    {subject.info}
                                </p>
                            </Card>
                            : 
                            <Card header={<img src={`./assets/img/subjects/${subject.icon}`} />} title={subject.name} reveal={<p>Coming Soon!</p>} >
                                <p>{subject.info}</p>
                                
                            </Card>
                        }
                        </col>
                    ))}
                    
                </row>
            </container>
        )
    }
}

export default Subject;
import React, {Component} from 'react'
import { Row, Container, Range, Icon, Col, Button } from 'react-materialize';

class Math extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            right: 0,
            wrong: 0,
            questionCount: 0,
            totalQuestions: 0,
            timer: 10,
            totalRight: 0,
            totalWrong: 0,
            quizId: "",
            selectedQuiz: false,
            rangeDisable: true
        }
    }

    componentWillMount(){
        let cookies = document.cookie
        if( cookies.length > 0){
            cookies = cookies.split("; ")
            if (cookies.indexOf("authenticated=true") !== -1){
                this.setState({
                    isLoggedIn: true
                })
            }
        }
    }


    countRangeSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.totalQuestions)
        if(this.state.totalQuestions > 0){
            this.setState({
                selectedQuiz: true
            })
        }
    }

    countRangeChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log(value)
        this.setState({
            [name]: value,
            rangeDisable: false
        })
    }

    userQuizCount = ()=> {
        return(
            <Row>
                <Col s={12}>
                    <form>
                        <Icon>
                            cloud
                        </Icon>
                        <span>Select how many problems you would like to solve?</span>
                        <Range min="10" max="60" name="totalQuestions" required onChange={this.countRangeChange}/>
                        <Button onClick={this.countRangeSubmit} type="submit" disabled={this.state.rangeDisable}>Submit</Button>
                    </form>
                </Col>
            </Row>
        )
    }


    //PROGRESS BAR
    //<Col s={12}>
    //    <ProgressBar progress={70} />
    //</Col>

    render(){
        return(
            <Container id="math">
                {(this.state.selectedQuiz) ? "" : this.userQuizCount() }

            </Container>
        )
    }
}

export default Math;
import React, {Component} from 'react'

class Dashboard extends Component {

    render(){
        return(
            <container>
                <h1>Dashboard</h1>
                <h3>Account Information:</h3>
                <h4>Name:</h4>
                <p>First: Test | Last: Test</p>
                <span>
                    <h4>email:</h4>
                    <p>test@test.com</p>
                </span>
            </container>           
        )
    }
}

export default Dashboard;
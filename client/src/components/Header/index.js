import React, { Component } from "react";
import API from '../../utils/API'

//import "./Footer.css";

class Header extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        //console.log(this.props.isLoggedIn)
        this.setState({
            isLoggedIn: this.props.isLoggedIn
        })
    }

    handleLogout = () => {
        API.handlelogout()
        .then(data => {return data.json()})
        .then(response=>{
          if(response === false){
            window.location.href = "/"
          }
        })
        .catch(err=> console.log("err",err));
    }

    guestNav = ()=>{
        return(
            <navbar brand={<a />} alignLinks="right" className="blue lighten-1">
                <navItem href="/">
                    Home
                </navItem>
                <navItem>
                    Guest
                </navItem>
                <navItem href="/login">
                    Log In
                </navItem>
                <navItem href="/subjects">
                    Subjects
                </navItem>
                <navItem href="/research">
                    Research
                </navItem>
            </navbar> 
        )   
    }

    userNav = ()=>{
        return(
            <navbar brand={<a />} alignLinks="right" className="blue lighten-1">
                <navItem href="/">
                    Home
                </navItem>
                <navItem href="/subjects">
                    Subjects
                </navItem>
                <navItem href="/research">
                    Research
                </navItem>
                <navItem href="/myproject">
                    My Project
                </navItem>
                <navItem href="/dashboard">
                    Dashboard
                </navItem>
                <navItem>
                    <button onClick={this.handleLogout}>
                        Logout
                    </button>
                </navItem>
            </navbar>   
        ) 
    }

    render(){

        return (this.props.isLoggedIn === true) ? this.userNav() : this.guestNav()
    }
};

export default Header;



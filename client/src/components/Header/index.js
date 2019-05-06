import React, { Component } from "react";
import { Navbar, NavItem, Button } from 'react-materialize';
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
            <Navbar brand={<a />} alignLinks="right" className="blue lighten-1">
                <NavItem href="/">
                    Home
                </NavItem>
                <NavItem>
                    Guest
                </NavItem>
                <NavItem href="/login">
                    Log In
                </NavItem>
                <NavItem href="/subjects">
                    Subjects
                </NavItem>
                <NavItem href="/research">
                    Research
                </NavItem>
            </Navbar> 
        )   
    }

    userNav = ()=>{
        return(
            <Navbar brand={<a />} alignLinks="right" className="blue lighten-1">
                <NavItem href="/">
                    Home
                </NavItem>
                <NavItem href="/subjects">
                    Subjects
                </NavItem>
                <NavItem href="/research">
                    Research
                </NavItem>
                <NavItem href="/myproject">
                    My Project
                </NavItem>
                <NavItem href="/dashboard">
                    Dashboard
                </NavItem>
                <NavItem>
                    <Button onClick={this.handleLogout}>
                        Logout
                    </Button>
                </NavItem>
            </Navbar>   
        ) 
    }

    render(){

        return (this.props.isLoggedIn === true) ? this.userNav() : this.guestNav()
    }
};

export default Header;



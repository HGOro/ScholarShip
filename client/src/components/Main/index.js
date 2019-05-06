import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Main = () => (
    <div class="header">
    <div class="logo-box">
            <img src={logo} alt="logo" class="logo"/>
        </div>
        <div class="text-box">
            <h1 class="heading-primary">
                <span class="heading-primary-main">Scholar<span class="shipText">Ship</span></span>
                <span class="heading-primary-sub">Big ideas for little people</span>
            </h1>

            <Link to="/login" class="btn btn-white btn-animated">
            Begin to Learn!
        </Link>
        </div>
        </div>
)

export default Main;

import React from "react";

function Elementary() {
  return (
    <div>
      <h1>Elementary Page</h1>
      <button>ABCs</button>
      <button>Math</button>
    </div>
  );
}

export default Elementary;


//import React from "react";
//import { Link, Route } from "react-router-dom";
//import Learn from "./Learn";
//
//function Elementary(props) {
//  return (
//    <div>
//      <h1>Contact Page</h1>
//      <p></p>
//      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
//        Learn More
//      </Link>{" "}
//      <Link to="/contact" role="button" className="btn btn-link">
//        Learn Less
//      </Link>
//      <Route exact path={`${props.match.url}/learn`} component={Learn} />
//    </div>
//  );
//}





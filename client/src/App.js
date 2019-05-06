import React from 'react';
// import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Subject from "./pages/Guest/Subject/Subject";
import Research from "./pages/Research";
import MyProject from "./pages/MyProject";
import Dashboard from "./pages/User/Dashboard/Dashboard";
import Mathematics from "./pages/Guest/Subject/Mathematics"
import LogIn from './pages/Guest/Home/LogIn';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/subjects" component={Subject} />
        <Route exact path="/math" component={Mathematics} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/myproject" component={MyProject} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

//class App extends Component {
//  
//  state = {
//    isLoggedIn: false
//  }
//  
//  componentWillMount(){
//    this.checkAuth();
//    //URL fixed remove anything from url, we want just "/"
//    //let location = window.location.href.split("3000")
//    //location = location[1]
//    //if(this.state.isLoggedIn === false && location !== "/"){
//    //  window.location.href = "/"
//    //}
//  }
//
//  checkAuth(){
//    API.checkAuth()
//    .then(data => {return data.json()})
//    .then(response => {
//      this.setState({
//        isLoggedIn: response
//      })
//    })
//    .catch(err => console.log("err", err));
//  }
//
//  guestRouting = () => {
//    return(
//      <Router>
//        <div className="content">
//          <Header isLoggedIn={this.state.isLoggedIn}/>
//          <div className="main">
//            <Switch>
//              <Route path="*" component={GuestRoutes} />
//              <Route exact path="/" component={Home} />
//              <Route exact path="/elementary" component={Elementary} />
//              <Route exact path="/research" component={Research} />
//              <Route exact path="/myproject" component={MyProject} />
//              <Route path="/user" component={User} />
//            </Switch>
//          </div>
//          <Footer/>
//        </div>
//      </Router>
//    )
//  }
//
//  userRouting = () => {
//    return(
//      <Router>
//        <div className="content">
//          <Header isLoggedIn={this.state.isLoggedIn} />
//          <div className="main"> 
//            <Switch>
//              <Route exact path="/" component={UserRoutes} />
//              <Route exact path="/dashboard" component={UserRoutes} />
//              <Route path="/dashboard/*" component={UserRoutes} />
//              <Route exact path="/subjects" component={GuestRoutes} />
//              <Route exact path="/math/quiz" component={GuestRoutes} />
//              <Route path="/math/*" component={GuestRoutes} />
//              <Route path="/math" component={GuestRoutes} />
//              <Route path="*" component={GuestRoutes} />
//              <Route exact path="/research" component={Research} />
//            </Switch>
//          </div>
//          <Footer/>
//        </div>
//      </Router>
//    )
//  }
//
//  render() {
//    switch(this.state.isLoggedIn){
//      case false:
//       return this.guestRouting()
//      case true:
//       return this.userRouting()
//      default:
//       return this.guestRouting()
//    }
//   }
//
//}

export default App;

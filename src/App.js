import React from "react";
import './App.css';
import {Row,Col, Container} from "reactstrap"
import Header from "./components/Header"
import Button from 'react-bootstrap/Button';
import { ToastContainer,toast } from 'react-toastify';
import Home from "./components/Home"
import Course from "./components/Course"
import AllCourse from "./components/AllCourses"
import AddCourse from "./components/AddCourse"
import Menus from "./components/Menus"
import {BrowserRouter as Router,Route} from "react-router-dom"
import AllCourses from "./components/AllCourses";


function App() {


  return (
    <div>
      <Router>
      <Container>
      <Header name="Anmol"/>
      <Row>
        <Col md={4}>
            <Menus/>

        </Col>
        <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-courses" component={AllCourses} exact/>
        </Col>
      </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;

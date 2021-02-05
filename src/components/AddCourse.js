import React,{useEffect,useState} from "react"
import { Fragment } from "react"
import { Form,FormGroup,Input,Container,Button } from "reactstrap"
import axios from "axios"
import base_url from "../api/Baseurl"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AddCourse=()=>{

    const [course,setCourse] =  useState({});
    useEffect(()=>{
        document.title="Add Course";
        toast("Edit here");
    },[])

    const handleForm = (e) =>{
        console.log(course);
        e.preventDefault();
        addCourse(course);
    }

    const addCourse=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                toast("posted successfully");
            },
            (error)=>{
                console.log(error);
                toast.error("Error occured");
            }
        )
    }
    return <Fragment>
        <h1 className="text-center my-3"> Fill course details here</h1>
        <Form onSubmit={handleForm}>
            <FormGroup >
                <label for = "userId" className="mx-3">Course ID</label>
                <Input 
                    type="text" 
                    placeholder="Enter here" 
                    id="userId" 
                    name = "userId"
                    onChange ={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}
                    />
            </FormGroup>
            <FormGroup>
                <label className="mx-3">Course Name</label>
                <Input type="text" placeholder="Enter here" id="name" name = "name"
                onChange ={(e)=>{
                    setCourse({...course,name:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label className="mx-3">Course Desciption</label>
                <Input type="textarea" placeholder="Enter here" id="description" name = "description" onChange ={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}/>
            </FormGroup>
            <Container className="text-center">
                <Button type = "submit" color="success">Add Course</Button>
                <Button color="warning" className="ml-2">Clear</Button>
            </Container>
        </Form>
    </Fragment>
}

export default AddCourse;
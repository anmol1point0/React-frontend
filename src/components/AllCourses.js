import React, { useState,useEffect } from "react"
import Course from "./Course"
import base_url from "../api/Baseurl"
import axios from "axios"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AllCourses=()=>{


    useEffect(()=>{
        document.title="All Courses";
        getAllCourses();
    },[])

    const[courses,setCourses]=useState([
    ])
    

    const getAllCourses=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                toast.success("course loaded");
                console.log(response);
                setCourses(response.data);
            },
            (error)=>{
                toast.error("Error fetching response");
                console.log(error);
            }
        )
    }

    const RemoveCourse=(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }
    <ToastContainer/>
    return(
        <div>
            <h1> All courses</h1>
            <p> These are the list of courses</p>
            {
                courses.length>0? courses.map((item)=>
                    <Course key = {item.id} course={item} remove={RemoveCourse}/>):"No courses"
            }
        </div>
    )
}
export default AllCourses;
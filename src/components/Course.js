import React from "react"
import axios from "axios"
import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Container,
    CardSubtitle
} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import base_url from "../api/Baseurl"

const btnhandle=()=>{
    return (
        toast("Clicked Successfully")
    );
}


const Course=({course,remove,update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Deleted Successfully");
                remove(id);
            }, (error)=>{
                console.log(error);
                toast.error("Can't delete");
            }
        )    
    }
    return(
        
        <Card className="text-center">
            <CardBody>
                <CardTitle style={{fontWeight: 'bold'}}>
                    {course.name}
                </CardTitle>
                <CardSubtitle className="my-2">
                    {course.description}
                </CardSubtitle>
                <ToastContainer/>
                <Button onClick={()=>{
                    deleteCourse(course.id)
                }}color="danger ">
                    Delete
                </Button>
                <Button color="warning ml-3">
                    update
                </Button>
            </CardBody>
        </Card>
        
    );
}
export default Course;
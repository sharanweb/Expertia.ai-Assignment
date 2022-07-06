import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./jobdetail.css"

export const Jobdetail = ()=>{
    const { id } = useParams();
    const [item, setItem] = useState({});

    const getData = (id) => {
        axios.get(`https://sharanu.herokuapp.com/jobs/${id}`)
        .then((res) => {
            setItem(res.data.job)
        }).catch(err => console.log(err))
    }
    console.log(item)

    useEffect(() => {
        getData(id);

    },[]);

    return (
        <div className="container">
            <h1>Job Description</h1>
            <div className="subdiv">
            <div className="imagediv">
                <img src={item.logo} alt="abcd" className="bigimage"></img>
            </div>
            <div className="description">
                <h2 className="title">{item.name}</h2>
                <p className="small">Role: {item.role}</p>
                <p className="small">CTC: {item.ctc}</p>
                <p className="small">Experience: {item.experience}</p>
                <p className="small">Location: {item.location}</p>
                <p className="small">Openings: {item.openings}</p>
                <p className="small">Interview Process: {item.process}</p>
                <p className="small">Description: {item.description}</p>
            </div>
            </div>
            <div>
                <Link to={"/apply"}>
                <button className="applybutton">Apply</button>
                </Link>
            </div>
            
        </div>
    )
        
    }
    

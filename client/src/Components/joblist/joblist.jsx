import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./joblist.css"


export const Joblist = ()=>{
    const [data, setData] = useState([]);
    const [pagetotal, setPagetotal] = useState([]);

    const Navigate = useNavigate();
    const search = useLocation().search;

    const page = new URLSearchParams(search).get("page") || 1;
    const pagesize = new URLSearchParams(search).get("pagesize") || 9;
    const role = new URLSearchParams(search).get("role") || "all";
    const ctc = new URLSearchParams(search).get("ctc") || 0;
    const location = new URLSearchParams(search).get("location") || "all";
    const experience = new URLSearchParams(search).get("experience") || "all";


    const getData = () => {
        axios.get(`https://sharanu.herokuapp.com/jobs/?page=${page}&pagesize=${pagesize}&role=${role}&ctc=${ctc}&location=${location}&experience=${experience}`)
        .then((res) => {
            setData(res.data.job)
            setPagetotal(res.data.totalPages)
        }).catch(err => console.log(err))
    }
    // console.log(data);

    let numpages = [];
    for(let i=1; i<=Math.ceil(pagetotal); i++){
        numpages.push(i);
    }
    console.log(numpages)

    useEffect(()=>{
        getData();
    },[page, role, location, experience, ctc])
    return(
        <div className="listcontainer">
            <div className="ad">
                Right Job at Right Place
            </div>
            <div className="filterbox">
                <div className="role">
                <select name="jobRoles" onChange={(e)=>{
                    Navigate(`/?page=${page}&pagesize=${pagesize}&role=${e.target.value}&ctc=${ctc}&location=${location}&experience=${experience}`)
                }} >
                    <option value="all" >Choose Job Role...</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Data Analyst">Data Analyst</option>
                </select>

                </div>
                <div className="location">
                <select name="jobLocation" onChange={(e)=>{
                    Navigate(`/?page=${page}&pagesize=${pagesize}&role=${role}&ctc=${ctc}&location=${e.target.value}&experience=${experience}`)
                }} >
                    <option value="all" >Choose Job Location...</option>
                    <option value="Bangalore">Bengaluru</option>
                    <option value="Pune">Pune</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Noida">Noida</option>
                    
                </select>
                </div>
                <div className="Experience">
                <select name="experience" onChange={(e)=>{
                    Navigate(`/?page=${page}&pagesize=${pagesize}&role=${role}&ctc=${ctc}&location=${location}&experience=${e.target.value}`)
                }} >
                    <option value="all" >Choose Experience...</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Senior Level">Mid Senior</option>
                    <option value="Senior Level">Senior</option>
                </select>
                </div>
                <div className="ctcrange">
                <input type="range" className="salaryRange_inp" min="1" max="30" name="salary" onChange={(e) => {
                    Navigate(`/?page=${page}&pagesize=${pagesize}&role=${role}&ctc=${e.target.value}&location=${location}&experience=${experience}`)
                }} />
                </div>
            </div>
            <div className="joblist">
                {
                    data.map((el)=>{
                        return(
                            <Link to={`/jobs/${el._id}`}>
                            <div className="outer" key={el._id}>
                                <div className="imgdiv">
                                    <img src={el.logo}></img>
                                </div>
                                <div className="description" key={el._id}>
                                   <h4 className="thick">{el.name}</h4>
                                   <p className="thin">Role:{el.role}</p>
                                   <p className="thin">Location:{el.location}</p>
                                   <p className="thin">Experirnce:{el.experience}</p>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="paginationbox">
                {
                    numpages.map((el)=>{
                        return(
                            <button onClick={()=>{
                                Navigate(`/?page=${el}&pagesize=${pagesize}&role=${role}&ctc=${ctc}&location=${location}&experience=${experience}`)
                            }}>{el}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}
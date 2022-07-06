import { Route, Routes } from "react-router-dom";
import {Navbar} from "../Components/navbar/navbar";
import { Joblist } from "../Components/joblist/joblist";
import { Jobdetail } from "../Components/jobDetail/jobdetaill";
import {Apply} from "../Components/applyPage/apply";
import {Success} from "../Components/SuccessPage/success"


export const AllRoutes = ()=>{
    return (
        <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Joblist></Joblist>}></Route>
            <Route path="/jobs/:id" element={<Jobdetail></Jobdetail>}></Route>
            <Route path="/apply" element={<Apply></Apply>}></Route>
            <Route path="/success" element={<Success></Success>}></Route>
        </Routes>
        </>
    )
}
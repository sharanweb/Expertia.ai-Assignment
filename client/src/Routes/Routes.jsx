import { Route, Routes } from "react-router-dom";
import {Navbar} from "../Components/navbar/navbar";
import { Joblist } from "../Components/joblist/joblist";

export const AllRoutes = ()=>{
    return (
        <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Joblist></Joblist>}></Route>
        </Routes>
        </>
    )
}
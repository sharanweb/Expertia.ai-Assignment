import "./apply.css"
import { Link} from "react-router-dom";

export const Apply = ()=>{
    const handleSubmit = () => {
        alert("You have Successfully applied for the Job Application")
    }
    
            
    

    return (
        <div className="jobListing_mainDiv">
            <h1>Fill Details</h1>

        
            <div className="job_container">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="inp" placeholder="Full Name" /> <br/>
                    <input type="text" className="inp" placeholder="Highest Qualification" /> <br/>

                    <label>Gender: </label> <br/>
                    <label>Male</label><input className="radio" name="gender" type="radio"  value="Male" /> 
                    <label>Female</label><input className="radio" type="radio" name="gender" value="Female" />
                    <label>Other</label><input className="radio" type="radio" name="gender" value="Other" />
                    <br/>

                    

                    <input type="text" className="inp" placeholder="Address" /> <br/>
                    <input type="text" className="inp" placeholder="Phone Number" /> <br/>
                    <input type="text" className="inp" placeholder="Resume Link" /> <br/>
                    <input type="text" className="inp" placeholder="Github Link" /> <br/>
                    <input type="text" className="inp" placeholder="Website Link(if any)" /> <br/>
                    <input type="text" className="inp" placeholder="Linkedin Link" /><br/>
                    <label>Are you comfortable in relocating to the job location? </label> <br/>
                    <label>Yes</label><input className="radio" type="radio" name="location"  value="Yes" /> 
                    <label>No</label><input className="radio" type="radio" name="location" value="No"/>
                    <br/>
                    <Link to={"/success"}>
                    <input type="submit" className="submitbutton" value="Submit Application"/>
                    </Link>

                    
                </form>
            </div>
        </div>
    )
        
    
        
}
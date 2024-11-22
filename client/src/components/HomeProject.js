import { useNavigate } from "react-router-dom";


import SingleProject from "./SingleProject";
import data from "../constants/Projects";
export default function HomeProject(){
    const workedProjects = data.map(proj => <SingleProject props={proj}/>)
    const navigate = useNavigate()
    const goToPage = () =>{
        navigate("/projects")
    }
    return (
        <div className="home-projects">
            <div className="home-project-head">
                <h1 className="home-projects-title" id="my-works">My Projects Highlight</h1>
                <div className="call-to-action" onClick={goToPage}>EXPLORE MORE</div>
            </div>
            <div className="projects-bucker">
                {workedProjects}
            </div>
        </div>
    )
}
import SingleProject from "./SingleProject";
import data from "../constants/Projects";
export default function HomeProject(){
    const workedProjects = data.map(proj => <SingleProject props={proj}/>)
    // const myProjects = [];
    // for(var i=0;i<=3;i++){
    //     myProjects.push(<SingleProject />)
    // }
    return (
        <div className="home-projects">
            <div className="home-project-head">
                <h1 className="home-projects-title">My Projects Highlight</h1>
                <div className="call-to-action">EXPLORE MORE</div>
            </div>
            <div className="projects-bucker">
                {workedProjects}
            </div>
        </div>
    )
}
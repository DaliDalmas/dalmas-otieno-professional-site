import SingleProject from "./SingleProject"
export default function HomeProject(){
    const myProjects = [];
    for(var i=0;i<=3;i++){
        myProjects.push(<SingleProject />)
    }
    return (
        <div className="home-projects">
            <div className="home-project-head">
                <h1 className="home-projects-title">My Projects Highlight</h1>
                <div className="call-to-action-2">EXPLORE MORE</div>
            </div>
            <div className="projects-bucker">
                {myProjects}
            </div>

            
        </div>
    )
}
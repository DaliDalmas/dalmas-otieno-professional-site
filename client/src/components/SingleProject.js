export default function SingleProject(projects){

    return (
        <div className="single-project">
            <img src={projects.props.image} alt="project" className="project-image"/>
            <div className="project-title">{projects.props.name}</div>
            <div className="project-stack"><span className="project-stack-title">Tech Stack:</span> {projects.props.stack}</div>
            <div className="project-stack"><span className="project-stack-title"><a href={projects.props.github}  target="_blank"  rel="noopener noreferrer">Open in GitHub</a></span></div>
        </div>
    )
}
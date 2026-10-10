type ProjectsData = {
    text: string;
    url: string;
}
type ProjectsProps = {
    dataset: ProjectsData[];
}

function Project({text, url} : ProjectsData) {
    return <>
        <li className="project_li">
            <span className="project_text">{text} - <a href={url} target="_blank" rel="noopener noreferrer">Link</a></span>
        </li>
    </>
}

function Projects( {dataset} : ProjectsProps) {
    return <>
    <div className="projects_container">
        <ul className="projects_ul">
            {dataset.map((data) => (<Project text={data.text} url={data.url}/>))}
        </ul>

    </div>
    </>
}

export default Projects;
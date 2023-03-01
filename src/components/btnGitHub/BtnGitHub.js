import "./style.css";
import { projects } from "./../../helpers/projectsList";
import gitHub from "./../../img/icons/gitHub-black.svg";
import { useParams } from "react-router-dom";

const BtnGitHub = () => {
    const {id} = useParams();
    const project = projects[id]
    return ( 
        <a href={project.gitHubLink} target="blank" rel="noreferrer" className="btn-outline">
                        <img src={gitHub} alt=""/>
                        GitHub repo
                    </a>
     );
}
 
export default BtnGitHub;
import { useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import ProjectModel from "./ProjectModel";
import { create } from "./api-projects";

export default function AddProject() {

    const navigate = useNavigate();

    const handleSubmit = async (project) => {

        const res = await create(project);

        if (res.success) {
            alert(res.message);
            navigate("/admin/projects");
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">

                    <h1>Add Project</h1>

                    <ProjectForm
                        project={new ProjectModel()}
                        handleSubmit={handleSubmit}
                    />

                </div>
            </div>
        </div>
    );
}
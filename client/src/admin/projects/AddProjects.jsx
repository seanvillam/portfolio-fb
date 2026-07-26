import { useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { create } from "./api-projects";

export default function AddProject() {

    const navigate = useNavigate();

    const handleSubmit = async (values) => {

        const data = await create(values);

        if (data.success) {
            navigate("/admin/projects");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Add Project</h2>

            <ProjectForm
                initialValues={{
                    title: "",
                    completion: "",
                    description: ""
                }}
                onSubmit={handleSubmit}
                submitLabel="Create Project"
            />

        </div>
    );
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { read, update } from "./api-projects";

export default function EditProject() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProject();
    }, []);

    const loadProject = async () => {

        const data = await read(id);

        if (data) {
            setProject(data);
        }

        setLoading(false);

    };

    const handleSubmit = async (values) => {

        const data = await update(id, values);

        if (data) {
            navigate("/admin/projects");
        }

    };

    if (loading) {
        return (
            <div className="container mt-4">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (

        <div className="container mt-4">

            <h2>Edit Project</h2>

            <ProjectForm
                initialValues={project}
                submitLabel="Update Project"
                onSubmit={handleSubmit}
            />

        </div>

    );

}
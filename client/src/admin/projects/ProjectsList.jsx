import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-projects";

export default function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        const data = await list();

        if (data) {
            setProjects(data);
        }
    };

    const deleteProject = async (id) => {
        if (window.confirm("Delete this project?")) {
            await remove(id);
            loadProjects();
        }
    };

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3">

                <h2>Projects</h2>

                <Link
                    to="/admin/projects/add"
                    className="btn btn-success"
                >
                    Add Project
                </Link>

            </div>

            <table className="table table-striped">

                <thead className="table-dark">
    <tr>
        <th>Title</th>
        <th>Completion</th>
        <th>Description</th>
        <th width="180">Actions</th>
    </tr>
</thead>

<tbody>
    {projects.map((project) => (
        <tr key={project._id}>

            <td>{project.title}</td>
            <td>{project.completion}</td>
            <td>{project.description}</td>

            <td>
                <Link
                    to={`/admin/projects/edit/${project._id}`}
                    className="btn btn-warning btn-sm me-2">
                    Edit
                </Link>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProject(project._id)}>
                    Delete
                </button>
            </td>

        </tr>
    ))}
</tbody>

            </table>

        </div>
    );
}
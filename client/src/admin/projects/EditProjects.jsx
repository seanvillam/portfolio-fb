import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import ProjectModel from './ProjectModel';
import { read, update } from './api-projects';

function EditProject() {
    const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')
    const { id } = useParams(); // Get the project ID from the URL parameters

    useEffect(() => {
        read(id)
            .then((res) => {
                if (res.success) {
                    setProject(res.data);
                 }
                else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }, [id, navigate]);

    const handleSubmit = async (values) => {

    const res = await update(id, values);

    if (res.success) {
        alert(res.message);
        navigate("/admin/projects");
    } else {
        setErrorMsg(res.message);
    }

};

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit a Project Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectForm
                        initialValues={project}
                        onSubmit={handleSubmit}
                        submitLabel="Update Project"
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProject;
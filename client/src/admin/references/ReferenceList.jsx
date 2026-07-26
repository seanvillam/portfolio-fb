import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-references";

export default function ReferencesList() {

    const [references, setReferences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReferences();
    }, []);

    const loadReferences = async () => {

        const data = await list();

        if (data) {
            setReferences(data);
        }

        setLoading(false);

    };

    const deleteReference = async (id) => {

        if (!window.confirm("Delete this reference?"))
            return;

        const result = await remove(id);

        if (result) {
            loadReferences();
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

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>References</h2>

                <Link
                    to="/admin/references/add"
                    className="btn btn-success">
                    Add Reference
                </Link>

            </div>

            <table className="table table-striped table-hover">

                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Testimonial</th>
                        <th width="180">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {references.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No references found.
                            </td>
                        </tr>
                    ) : (

                        references.map((reference) => (

                            <tr key={reference._id}>

                                <td>{reference.name}</td>
                                <td>{reference.position}</td>
                                <td>{reference.company}</td>
                                <td>{reference.testimonial}</td>

                                <td>

                                    <Link
                                        to={`/admin/references/edit/${reference._id}`}
                                        className="btn btn-warning btn-sm me-2">
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteReference(reference._id)}>
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}
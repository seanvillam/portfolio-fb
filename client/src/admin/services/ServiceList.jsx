import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-services";

export default function ServicesList() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {

        const data = await list();
console.log(data);
console.log(Array.isArray(data));
        if (data) {
            setServices(data);
        }

        setLoading(false);

    };

    const deleteService = async (id) => {

        if (!window.confirm("Delete this service?"))
            return;

        const result = await remove(id);

        if (result) {
            loadServices();
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

                <h2>Services</h2>

                <Link
                    to="/admin/services/add"
                    className="btn btn-success">
                    Add Service
                </Link>

            </div>

            <table className="table table-striped table-hover">

                <thead className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th width="180">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {services.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No services found.
                            </td>
                        </tr>
                    ) : (

                        services.map((service) => (

                            <tr key={service._id}>

                                <td>{service.title}</td>
                                <td>{service.description}</td>

                                <td>

                                    <Link
                                        to={`/admin/services/edit/${service._id}`}
                                        className="btn btn-warning btn-sm me-2">
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteService(service._id)}>
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
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServiceForm from "./ServiceForm";
import { read, update } from "./api-services";

export default function EditService() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadService();
    }, []);

    const loadService = async () => {

        const data = await read(id);

        if (data) {
            setService(data);
        }

        setLoading(false);

    };

    const handleSubmit = async (values) => {

        const data = await update(id, values);

        if (data) {
            navigate("/admin/services");
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

            <h2>Edit Service</h2>

            <ServiceForm
                initialValues={service}
                submitLabel="Update Service"
                onSubmit={handleSubmit}
            />

        </div>

    );

}
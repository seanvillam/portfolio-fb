import { useNavigate } from "react-router-dom";
import ServiceForm from "./ServiceForm";
import { create } from "./api-services";

export default function AddService() {

    const navigate = useNavigate();

    const handleSubmit = async (service) => {

        const data = await create(service);

        if (data) {
            navigate("/admin/services");
        }

    };

    return (

        <div className="container mt-4">

            <h2>Add Service</h2>

            <ServiceForm
                submitLabel="Create Service"
                onSubmit={handleSubmit}
            />

        </div>

    );

}
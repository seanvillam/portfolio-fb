import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "./api-references";
import ReferenceForm from "./ReferenceForm";

export default function EditReference() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [reference, setReference] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReference();
    }, []);

    const loadReference = async () => {

        const data = await read(id);

        if (data) {
            setReference(data);
        }

        setLoading(false);

    };

    const handleSubmit = async (values) => {

        const data = await update(id, values);

        if (data) {
            navigate("/admin/references");
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

            <h2>Edit Reference</h2>

            <ReferenceForm
                initialValues={reference}
                submitLabel="Update Reference"
                onSubmit={handleSubmit}
            />

        </div>

    );

}
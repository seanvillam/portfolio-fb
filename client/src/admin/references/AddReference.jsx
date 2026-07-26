import { useNavigate } from "react-router-dom";
import { create } from "./api-references";
import ReferenceForm from "./ReferenceForm";

export default function AddReference() {

    const navigate = useNavigate();

    const handleSubmit = async (reference) => {

        const data = await create(reference);

        if (data) {
            navigate("/admin/references");
        }

    };

    return (

        <div className="container mt-4">

            <h2>Add Reference</h2>

            <ReferenceForm
                submitLabel="Create Reference"
                onSubmit={handleSubmit}
            />

        </div>

    );

}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "./UserForm";
import { read, update } from "./api-users";

export default function EditUser() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {

        const data = await read(id);

        if (data) {
            setUser(data);
        }

        setLoading(false);
    };

    const handleSubmit = async (values) => {

        const data = await update(id, values);

        if (data) {
            navigate("/admin/users");
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

            <h2>Edit User</h2>

            <UserForm
                initialValues={user}
                submitLabel="Update User"
                onSubmit={handleSubmit}
            />

        </div>
    );
}
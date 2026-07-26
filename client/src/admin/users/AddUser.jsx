import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { create } from "./api-users";

export default function AddUser() {

    const navigate = useNavigate();

    const handleSubmit = async (user) => {

        const data = await create(user);

        if (data) {
            navigate("/admin/users");
        }
    };

    return (
        <div className="container mt-4">

            <h2>Add User</h2>

            <UserForm
                submitLabel="Create User"
                onSubmit={handleSubmit}
            />

        </div>
    );
}
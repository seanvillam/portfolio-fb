import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "./api-users";

export default function UsersList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await list();

        if (data) {
            setUsers(data);
        }

        setLoading(false);
    };

    const deleteUser = async (id) => {

        if (!window.confirm("Delete this user?"))
            return;

        const result = await remove(id);

        if (result) {
            loadUsers();
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
                <h2>Users</h2>

                <Link
                    to="/admin/users/add"
                    className="btn btn-success">
                    Add User
                </Link>
            </div>

            <table className="table table-striped table-hover">

                <thead className="table-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th width="180">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No users found.
                            </td>
                        </tr>
                    ) : (

                        users.map((user) => (
                            <tr key={user._id}>

                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>

                                <td>

                                    <Link
                                        to={`/admin/users/edit/${user._id}`}
                                        className="btn btn-warning btn-sm me-2">
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteUser(user._id)}>
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
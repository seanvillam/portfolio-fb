import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./api-auth";

export default function SignUp() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = await signup(values);

        if (data.success) {

            alert("Account created successfully.");

            navigate("/signin");

        } else {
            setMessage(data.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4" style={{ width: "420px", borderRadius: "12px" }}>
                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Sign Up
                            </h2>

                            <p className="text-danger">{message}</p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label>First Name</label>
                                    <input
                                        className="form-control"
                                        name="firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Last Name</label>
                                    <input
                                        className="form-control"
                                        name="lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    type="submit">
                                    Sign Up
                                </button>

                            </form>

                            <div className="text-center mt-3">

                                Already have an account?

                                <br />

                                <Link to="/signin">
                                    Sign In
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
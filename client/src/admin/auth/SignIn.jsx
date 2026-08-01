import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "./api-auth";

export default function SignIn() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
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

        const data = await signin(values);

        if (data.success) {

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            navigate("/admin");

        } else {

            setMessage(data.message);

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow-lg p-4" style={{ width: "420px", borderRadius: "12px" }}>

                        <div className="card-body">

                            <h2 className="text-center mb-4">

                                Sign In

                            </h2>

                            <p className="text-danger">

                                {message}

                            </p>

                            <form onSubmit={handleSubmit}>

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
                                    className="btn btn-success w-100"
                                    type="submit">

                                    Sign In

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                Don't have an account?

                                <br />

                                <Link to="/signup">

                                    Create Account

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
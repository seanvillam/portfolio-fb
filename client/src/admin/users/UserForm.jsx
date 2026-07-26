import { useState, useEffect } from "react";

export default function UserForm({
    initialValues,
    onSubmit,
    submitLabel
}) {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        if (initialValues) {
            setValues({
                firstname: initialValues.firstname || "",
                lastname: initialValues.lastname || "",
                email: initialValues.email || "",
                password: ""
            });
        }
    }, [initialValues]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label className="form-label">
                    First Name
                </label>

                <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    value={values.firstname}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Last Name
                </label>

                <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    value={values.lastname}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
    <label className="form-label">Password</label>

    <input
        type="password"
        name="password"
        className="form-control"
        value={values.password}
        onChange={handleChange}
        required
    />
</div>

            <button
                type="submit"
                className="btn btn-primary">
                {submitLabel}
            </button>

        </form>
    );
}
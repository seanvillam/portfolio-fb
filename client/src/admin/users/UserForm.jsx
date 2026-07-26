import { useState, useEffect } from "react";

export default function UserForm({
    initialValues,
    onSubmit,
    submitLabel
}) {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    useEffect(() => {
        if (initialValues) {
            setValues({
                firstName: initialValues.firstName || "",
                lastName: initialValues.lastName || "",
                email: initialValues.email || ""
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
                    name="firstName"
                    className="form-control"
                    value={values.firstName}
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
                    name="lastName"
                    className="form-control"
                    value={values.lastName}
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

            <button
                type="submit"
                className="btn btn-primary">
                {submitLabel}
            </button>

        </form>
    );
}
import { useEffect, useState } from "react";

export default function ServiceForm({
    initialValues,
    onSubmit,
    submitLabel
}) {

    const [values, setValues] = useState({
        title: "",
        description: ""
    });

    useEffect(() => {

        if (initialValues) {

            setValues({
                title: initialValues.title || "",
                description: initialValues.description || ""
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
                    Title
                </label>

                <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={values.title}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Description
                </label>

                <textarea
                    name="description"
                    rows="5"
                    className="form-control"
                    value={values.description}
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
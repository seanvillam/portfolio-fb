import { useEffect, useState } from "react";

export default function ProjectForm({
    initialValues,
    onSubmit,
    submitLabel
}) {

    const [values, setValues] = useState({
        title: "",
        completion: "",
        description: ""
    });

    useEffect(() => {

        if (initialValues) {

            setValues({
                title: initialValues.title || "",
                completion: initialValues.completion || "",
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

    console.log("onSubmit =", onSubmit);
    console.log("values =", values);

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
                    Completion
                </label>

                <input
                    type="text"
                    name="completion"
                    className="form-control"
                    value={values.completion}
                    onChange={handleChange}
                    placeholder="e.g. April 2026 or 100%"
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
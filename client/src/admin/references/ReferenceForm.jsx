import { useEffect, useState } from "react";

export default function ReferenceForm({
    initialValues,
    onSubmit,
    submitLabel
}) {

    const [values, setValues] = useState({
        name: "",
        testimonial: "",
        position: "",
        company: ""
    });

    useEffect(() => {

        if (initialValues) {

            setValues({
                name: initialValues.name || "",
                testimonial: initialValues.testimonial || "",
                position: initialValues.position || "",
                company: initialValues.company || ""
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
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={values.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Position
                </label>

                <input
                    type="text"
                    name="position"
                    className="form-control"
                    value={values.position}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Company
                </label>

                <input
                    type="text"
                    name="company"
                    className="form-control"
                    value={values.company}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Testimonial
                </label>

                <textarea
                    name="testimonial"
                    rows="5"
                    className="form-control"
                    value={values.testimonial}
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
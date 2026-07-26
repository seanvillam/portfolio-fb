const API = "https://portfolio-test-u2ex.onrender.com/api";

export const list = async () => {
    const response = await fetch(`${API}/projects`);
    return await response.json();
};

export const create = async (project) => {
    const response = await fetch(`${API}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    return await response.json();
};

export const read = async (id) => {
    const response = await fetch(`${API}/projects/${id}`);
    return await response.json();
};

export const update = async (id, project) => {
    const response = await fetch(`${API}/projects/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/projects/${id}`, {
        method: "DELETE",
    });

    return await response.json();
};
import authHeader from "../auth/auth-header";

const API = "https://portfolio-test-u2ex.onrender.com/api";


export const list = async () => {
    const response = await fetch(`${API}/projects`);
    const result = await response.json();

    return result.data;
};

export const create = async (project) => {
    const response = await fetch(`${API}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", ...authHeader()
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
            "Content-Type": "application/json", ...authHeader()
        },
        body: JSON.stringify(project),
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/projects/${id}`, {
        method: "DELETE", 
        headers: {...authHeader()
        }
    });

    return await response.json();
};
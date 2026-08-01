import authHeader from "../auth/auth-header";

const API = "https://portfolio-test-u2ex.onrender.com/api";

export const list = async () => {
    const response = await fetch(`${API}/references`);
    const result = await response.json();
    return result.data;
};

export const create = async (reference) => {
    const response = await fetch(`${API}/references`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", ...authHeader()
        },
        body: JSON.stringify(reference),
    });

    return await response.json();
};

export const read = async (id) => {
    const response = await fetch(`${API}/references/${id}`);
    const result = await response.json();
    return result.data;
};

export const update = async (id, reference) => {
    const response = await fetch(`${API}/references/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", ...authHeader()
        },
        body: JSON.stringify(reference),
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/references/${id}`, {
        method: "DELETE", 
        headers: {...authHeader()
        }
    });

    return await response.json();
};
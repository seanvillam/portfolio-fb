import authHeader from "../auth/auth-header";

const API = "https://portfolio-test-u2ex.onrender.com/api";

export const list = async () => {
    const response = await fetch(`${API}/services`);
    const result = await response.json();
    return result.data;
};

export const create = async (service) => {
    const response = await fetch(`${API}/services`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", ...authHeader()
        },
        body: JSON.stringify(service),
    });

    return await response.json();
};

export const read = async (id) => {
    const response = await fetch(`${API}/services/${id}`);
    return await response.json();
};

export const update = async (id, service) => {
    const response = await fetch(`${API}/services/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", ...authHeader()
        },
        body: JSON.stringify(service),
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/services/${id}`, {
        method: "DELETE",
        headers: {...authHeader()
        }
    });

    return await response.json();
};
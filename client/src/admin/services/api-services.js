const API = "https://portfolio-frontend-cpaq.onrender.com/api";

export const list = async () => {
    const response = await fetch(`${API}/services`);
    return await response.json();
};

export const create = async (service) => {
    const response = await fetch(`${API}/services`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
            "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/services/${id}`, {
        method: "DELETE",
    });

    return await response.json();
};
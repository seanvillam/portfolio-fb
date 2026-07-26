const API = "https://portfolio-frontend-cpaq.onrender.com/api";

export const list = async () => {
    const response = await fetch(`${API}/users`);
    return await response.json();
};

export const create = async (user) => {
    const response = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return await response.json();
};

export const read = async (id) => {
    const response = await fetch(`${API}/users/${id}`);
    return await response.json();
};

export const update = async (id, user) => {
    const response = await fetch(`${API}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/users/${id}`, {
        method: "DELETE"
    });

    return await response.json();
};
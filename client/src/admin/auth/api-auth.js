const API = "https://portfolio-test-u2ex.onrender.com/api";

export const signup = async (user) => {
    const response = await fetch(`${API}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return await response.json();
};

export const signin = async (user) => {
    const response = await fetch(`${API}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return await response.json();
};
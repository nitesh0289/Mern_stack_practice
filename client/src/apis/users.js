import client from "./_client";

const endpoint = "/api/users";

export const register = (details) => client.post(endpoint + "/signup", details);

export const login = (details) => client.post(endpoint + "/login", details);

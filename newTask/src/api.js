const taskHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

export async function getTasks(token) {
  const response = await fetch(taskHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchLogin(login, password) {
  const response = await fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
  const data = await response.json();
  return data;
}

export async function fetchRegistration(login, name, password) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });
  const data = await response.json();
  return data;
}
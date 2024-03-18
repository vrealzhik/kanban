const taskHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

export async function getTasks(token) {
  const response = await fetch(taskHost, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

export async function postTask(token, title, topic, status, description, date) {
  const response = await fetch(taskHost, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, topic, status, description, date }),
  });
  if (!response.ok) {
    throw new Error("Ошибка добавления задачи");
  }
  return await response.json();
}

export async function deleteTask(token, id) {
  const response = await fetch(taskHost + `/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка удаления задачи");
  }
  return await response.json();
}

export async function editTask(
  token,
  title,
  topic,
  status,
  description,
  date,
  id
) {
  const response = await fetch(taskHost + `/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, topic, status, description, date }),
  });
  const data = await response.json();
  return data;
}

export async function fetchLogin(login, password) {
  const response = await fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  }
  return await response.json();
}

export async function fetchRegistration(login, name, password) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });
  if (response.status === 400) {
    throw new Error("Такой пользователь уже существует");
  }
  return await response.json();
}

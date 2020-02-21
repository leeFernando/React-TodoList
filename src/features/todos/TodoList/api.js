const APIURL = '/api/todos/';

function handleErr(res) {
  if (!res.ok) {
    if (res.status >= 400 && res.status < 500) {
      return res.json()
        .then(data => {
          let err = { errorMessage: data.message };
          throw err;
        })
    } else {
      let err = { errorMessage: 'Please try again later, server is not responding' };
      throw err;
    }
  }
  return res.json();
}

export async function getTodos() {
  return fetch(APIURL)
    .then(handleErr)
}

export async function addTodo(val) {
  return fetch(APIURL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ name: val })
  })
    .then(handleErr)
}

export async function deleteTodo(id) {
  const deleteUrl = APIURL + id;
  return fetch(deleteUrl, {
    method: 'DELETE'
  })
    .then(handleErr)
}

export async function toggleTodo(todo) {
  const updateUrl = APIURL + todo._id;
  return fetch(updateUrl, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ completed: !todo.completed })
  })
    .then(handleErr)
}
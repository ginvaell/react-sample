export function auth(login, password) {
  const body = JSON.stringify({login, password});
  return fetch('http://localhost:1337/auth', {
    method: 'POST',
    body
  })
    .then(response => response.json());
}
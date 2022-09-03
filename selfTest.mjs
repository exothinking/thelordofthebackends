import fetch from 'node-fetch';

(async () => {
  const response = await fetch('http://localhost:3000/user', {method: 'GET'});
  const data  = await response.json();

  console.log(data);
})();

// error example
(async () => {
  const response = await fetch('http://localhost:3000/user?error=500', {method: 'GET'});
  const data  = await response.json();

  console.log(data);
})();

(async () => {
  const response = await fetch('http://localhost:3000/user', {method: 'POST'});
  const data  = await response.json();

  console.log(data);
})();

// other error example
(async () => {
  const response = await fetch('http://localhost:3000/user?error=500', {method: 'POST'});
  const data  = await response.json();

  console.log(data);
})();

(async () => {
  const response = await fetch('http://localhost:3000/user/1', {method: 'PUT'});
  const data  = await response.json();

  console.log(data);
})();

(async () => {
  const response = await fetch('http://localhost:3000/user/1', {method: 'DELETE'});
  const data  = await response.json();

  console.log(data);
})();
window.fetch('http://localhost:3000/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: "danny",
      password: "password",
      email: "danny@email.com"
    }
  })
})
  .then(r => r.json())
  .then(console.log)
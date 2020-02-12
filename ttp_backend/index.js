// Create a user fetch
// 
// window.fetch('http://localhost:3000/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: "danny",
//       password: "password",
//       email: "danny@email.com"
//     }
//   })
// })
//   .then(r => r.json())
//   .then(console.log)

// Login a user and get a token

let userToken = ''

window.fetch('http://localhost:3000/api/v1/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'danny',
      password: 'password',
    }
  })
})
  .then(r => r.json())
  .then(token => {
    userToken = token.jwt
    console.log('token: ', userToken)
  })
  .then(r => {
    window.fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
      .then(r => r.json())
      .then(u => {
        console.log(u.user)
      })

  })

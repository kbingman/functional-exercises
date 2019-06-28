t fetch = require('node-fetch')

const getFromAPI = baseURL => endPoint => callback =>
  fetch(`${baseURL}${endPoint}`)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => {
      console.error(err.message)
    })

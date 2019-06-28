import fetch from 'node-fetch';

const getFromAPI = baseURL => endPoint => callback =>
  fetch(`${baseURL}${endPoint}`)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => {
      console.error(err.message)
    });

const getGithub = getFromAPI(
  'https://api.github.com'
);

// We can create several get request functions by partially applying different
// endpoints to our getGithub function

const getGithubUsers = getGithub('/users');
const getGithubRepos = getGithub('/repositories');

getGithubUsers(data =>
  data.forEach(user => {
    console.log(`User: ${user.login}`)
  })
);

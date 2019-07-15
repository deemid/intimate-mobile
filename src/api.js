import axios from 'axios'

// axios.defaults.baseURL = 'https://dev-api.intimate.partners'

axios.interceptors.request.use(config => {
  // TODO: CONFIGURE GET TOKEN HERE
  // const token = getItem('access_token');
  // config.headers.common.Authorization = `Bearer ${token}`; // eslint-disable-line
  return config;
});

function post(endpoint, payload, config) {
  const postFunc = axios.post(endpoint, payload, config);
  return postFunc.then(response => response).catch(errorHandler);
}

export function Login (email, password) {
  console.log('logging in ', email, password)
  return axios.post('https://dev-api.intimate.partners/oauth/token', {
    grant_type: 'password',
    client_id: 'partners',
    client_secret: 'secret',
    username: email,
    password
  }, {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
}
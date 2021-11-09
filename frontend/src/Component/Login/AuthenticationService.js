import axios from 'axios';

class AuthenticationService {
  executeJwtAuthenticationService(username, password) {
    return axios.post('115.85.182.194:8080/auth/login', {
      username,
      password,
    });
  }

  // executeHelloService() {
  //     console.log("===executeHelloService===");
  //     return axios.get("115.85")
  // }

  registerSuccessfulLoginForJwt(username, token) {
    console.log('===registerSuccessfullLoginForJwt===');
    localStorage.setItem('token', token);
    localStorage.setItem('authenticatedUser', username);
    // sessionStorage.setItem("authenticatedUser", username);
    // this.setupAsiosInterceptors(this.createJWTToken(token))
    this.setupAxiosInterceptors();
  }

  createJWTToken(token) {
    return 'Bearer' + token;
  }

  setupAxiosInterceptors() {
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = 'Bearer' + token;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  logout() {
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('token');
  }

  isUserLoggedIn() {
    const token = localStorage.getItem('token');
    console.log('===userLoggedInCheck===');
    console.log(token);
    if (token) {
      return true;
    }
    return false;
  }

  getLoggedInUserName() {
    let user = localStorage.getItem('authenticatedUser');
    if (user === null) return '';
    return user;
  }
}

export default new AuthenticationService();

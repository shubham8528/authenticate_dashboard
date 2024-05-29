// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    localStorage.removeItem("token");
  },
  isAuth() {
    return localStorage.getItem("token");
  },
  setToken(token) {
    try {
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.log(error);
    }
  },
  getToken() {
    try {
      const authTokenString = localStorage.getItem("token");
      if (!authTokenString) {
        return "";
      }
      return JSON.parse(authTokenString);
    } catch (error) {
      console.log(error);
    }
  },
  clearStorage() {
    localStorage.clear();
  },
};
export default Auth;

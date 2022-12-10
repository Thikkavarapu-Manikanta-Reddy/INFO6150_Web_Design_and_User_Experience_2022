const LocalStorageService = (function(){

    function getToken() {
      return localStorage.getItem('token');
    }

    function getUser() {
      return localStorage.getItem('User');
    }

    function setToken(token) {
      localStorage.setItem("Token", token);
    }

    function setUser(user) {
      localStorage.setItem("User", JSON.stringify(user));
    }

    function removeSessionData() {
      localStorage.removeItem('User');
      localStorage.removeItem('Token');
    }

   return {
      getToken : getToken,
      getUser: getUser,
      setToken: setToken,
      setUser: setUser,
      removeSessionData: removeSessionData
    }
   })();

   export default LocalStorageService;
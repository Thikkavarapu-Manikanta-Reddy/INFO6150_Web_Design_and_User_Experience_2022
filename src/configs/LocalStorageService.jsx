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

    function setVerifiedUser(status) {
      localStorage.setItem("verifiedUser", status);
    }

    function getVerifiedUser() {
      return localStorage.getItem('verifiedUser');
    }

    function removeSessionData() {
      localStorage.removeItem('User');
      localStorage.removeItem('Token');
      localStorage.removeItem('verifiedUser');
    }

   return {
      getToken : getToken,
      getUser: getUser,
      setToken: setToken,
      setUser: setUser,
      removeSessionData: removeSessionData,
      setVerifiedUser: setVerifiedUser,
      getVerifiedUser: getVerifiedUser
    }
   })();

   export default LocalStorageService;
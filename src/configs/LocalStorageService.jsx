const LocalStorageService = (function(){

    function getToken() {
      return localStorage.getItem('token');
    }

    function getUser() {
      return localStorage.getItem('User');
    }

   return {
      getToken : getToken,
      getUser: getUser
    }
   })();

   export default LocalStorageService;
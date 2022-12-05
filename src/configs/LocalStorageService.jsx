const LocalStorageService = (function(){

    function getToken() {
      return localStorage.getItem('token');
    }

   return {
      getToken : getToken
    }
   })();

   export default LocalStorageService;
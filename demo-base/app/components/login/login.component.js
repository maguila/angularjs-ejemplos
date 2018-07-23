angular.module('myApp').
    component('login', {
      templateUrl: 'components/login/login.template.html'  ,
      controller: function LoginController(){
          this.usuario = "";
          this.password = undefined;
      }
    });
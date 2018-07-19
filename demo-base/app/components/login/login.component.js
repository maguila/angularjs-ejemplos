angular.module('myApp').
    component('login', {
      templateUrl: 'components/login/login.template.html'  ,
      controller: function LoginController(){
          this.usuario = "maguila";
          this.password = undefined;
      }
    });
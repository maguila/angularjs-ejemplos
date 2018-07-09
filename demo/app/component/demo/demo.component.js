angular.module('myApp')
    .component('userList', {
        templateUrl:'component/demo/demo.html',
        controller: function DemoController($mdDialog){
            this.demo = ['a', 'b', 'c'];
            this.myDate = undefined;    
            this.variable = "holaa variable";

            this.accion = function(event){
                console.log("accion!!!!! " + (Object.keys(event)));

                $mdDialog.show(
                    $mdDialog.alert()
                      .parent(angular.element(document.querySelector('#popupContainer')))
                      .clickOutsideToClose(true)
                      .title('This is an alert title')
                      .textContent('You can specify some description text in here.')
                      .ariaLabel('Alert Dialog Demo')
                      .ok('Got it!')
                      .targetEvent(event)
                );                
            }
        }
    });

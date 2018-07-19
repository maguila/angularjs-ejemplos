angular.module("myApp").
    component('inicio', { 
        templateUrl:'components/inicio/inicio.html' ,
        controller: function InicioController($scope, $mdToast){
            console.log("inicio controlador [InicioController] ... " + $scope.hola);
            this.variable = "Abrir Toast";

            var last = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };

            $scope.toastPosition = angular.extend({}, last);
            console.log("hola toastPosition = " + this.toastPosition);

            this.getToastPosition = function () {
                console.log("getToastPosition() ... ");
                this.sanitizePosition();

                return Object.keys(this.toastPosition)
                    .filter(function (pos) { return this.toastPosition[pos]; })
                    .join(' ');
            };

            this.abrirMensaje = function () {

                console.log("abrir modal !!!");

                var pinTo = this.getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Simple Toast!')
                        .position(pinTo)
                        .hideDelay(3000)
                );
            }

            this.getToastPosition = function () {
                console.log("getToastPosition()....");
                this.sanitizePosition();

                return Object.keys($scope.toastPosition)
                    .filter(function (pos) { return $scope.toastPosition[pos]; })
                    .join(' ');
            };

            this.sanitizePosition = function() {
                console.log("sanitizePosition() ... toastPosition = " + $scope.toastPosition + ", variable="+this.variable);
                var current = $scope.toastPosition;

                if (current.bottom && last.top) current.top = false;
                if (current.top && last.bottom) current.bottom = false;
                if (current.right && last.left) current.left = false;
                if (current.left && last.right) current.right = false;

                last = angular.extend({}, current);
            }


            console.log("FIN InicioController() ...");

        }
    });
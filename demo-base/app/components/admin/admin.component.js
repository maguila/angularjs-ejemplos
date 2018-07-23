angular.module('myApp').
    component('admin', {
        templateUrl: 'components/admin/admin.html',
        controller: function AdminController($timeout, $mdSidenav, $log) {

            this.toggleLeft = buildDelayedToggler('left');
            this.toggleRight = buildToggler('right');
            this.isOpenRight = function () {
                return $mdSidenav('right').isOpen();
            };

            function debounce(func, wait, context) {
                var timer;

                return function debounced() {
                    var context = this,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function () {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            function buildDelayedToggler(navID) {
                return debounce(function () {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }, 200);
            }

            function buildToggler(navID) {
                return function () {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                };
            }

            this.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                });
            };    

        }

    });
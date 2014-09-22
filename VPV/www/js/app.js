/**
 * Created by Lucas on 22/09/14.
 */
angular.module('app', ['onsen']);

angular.module('app').controller('AppController', function($scope) {
    $scope.doSomething = function() {
        setTimeout(function() {
            alert('tapped');
        }, 100);
    };

    $scope.doConverter = function (){
        var obamas = document.getElementById('obamas');
        var taxa = document.getElementById('taxa');

        var dilmas = document.getElementById('dilmas');
        var valor = parseFloat(obamas.value) * (parseFloat(taxa.value) / 100);
        valor = parseFloat(obamas.value) + valor;
        valor = valor * 1.0636;
        valor = valor * 2.35;
        dilmas.value = valor.toFixed(2);
    };
});
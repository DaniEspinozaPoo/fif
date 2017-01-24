$('#myTabs li a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

'use strict';

var app = angular.module('TablaDemo', []);
app.controller('TablaCtrl', ['$scope', function($scope) {

 $scope.lista = [{
   nombres: 'Juan',
   apellidos: 'Pérez',
   rut: '18626204-2',
}, {
   nombres: 'Camila',
   apellidos: 'Pino',
   rut: '17739519-6',
 }, {
   nombres: 'Ana',
   apellidos: 'López',
   rut: '13443221-4',
 }];

  $scope.lista = [{
    nombres: 'Juan',
    apellidos: 'Pérez',
    rut: '18626204-2',
 }, {
    nombres: 'Camila',
    apellidos: 'Pino',
    rut: '17739519-6',
  }, {
    nombres: 'Ana',
    apellidos: 'López',
    rut: '13443221-4',
  }];

 $scope.eliminar = function(row) {
    swal({
  title: "¿Seguro que quieres eliminar los datos seleccionados?",
  text: "Estos datos se eliminaran de cualquier dispositivo sincronizado",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "aceptar",
  closeOnConfirm: false
},
function(){
  swal("Eliminado", "has eliminado el registro", "success");
});{
      $scope.lista.splice(row, 1);
    }
  };

 $scope.agregar = function() {
    $scope.lista.push({
      nombres: '',
      apellidos: '',
      rut: '',
      serie: '',
    })
  };

 $scope.recuperarValores = function() {
    console.log($scope.lista);
    $("#JSON").text(JSON.stringify($scope.lista));
  };
}]);

app.directive('editableTd', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.css("cursor", "pointer");
      element.attr('contenteditable', 'true');

     element.bind('blur keyup change', function() {
        scope.lista[attrs.row][attrs.field] = element.text();
        scope.$digest();
      });

     element.bind('click', function() {
        document.execCommand('selectAll', false, null)
      });
    }
  };
}]);
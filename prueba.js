angular
  .module('prueba', ['ngMaterial'])
  .controller('functionName', functionName);

function functionName() {
  var vm = this;

  vm.persona = [
    {dni:"11231", nombre:"jsadhkajd", edad:'15'},
    {dni:"13123", nombre:"gdfhgdh", edad:'23'}
  ];
  vm.miEdad = miEdad;

  function miEdad(persona) {
    return persona.edad
  }
}

import template from './personCreate.html';
import controller from './personCreate.controller';

let personCreateComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default personCreateComponent;

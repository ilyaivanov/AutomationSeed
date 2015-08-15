function MyCtrl() {
    var vm = this;

    vm.text = "Hello World";
}

angular
    .module("app")
    .controller("MyFuckingController", MyCtrl);
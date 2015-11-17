//=============================
//=== MAIN PARTS CONTROLLER ===
//=============================

partsBinApp.controller('PartsController', ['$scope','$http', '$sce', function($scope, $http, $sce) {
    if(typeof (Storage) !== "undefined") {
        //put local storage logic here
    }
    else {
        //put error message here
    }
    $scope.name = 'Jeff';   // who's parts bin? would require modal
    $scope.stuff = {value:'dummy manual input'};

    //grab dummy data via angular XHR
    $http.get('js/data.json').success(function(data) {
        $scope.bins = data; //data is a special data object, needs to be put into array
    });

}]);

// ===============================
// == MODAL PRACTICE CONTROLLER ==
// ===============================

partsBinApp.controller('ModalPracticeController', ['$scope', function($scope) {

    //copied from template
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

}]);

// =======================================
// == LOCAL STORAGE TEST RND CONTROLLER ==
// =======================================

//messing around with local storage
partsBinApp.controller('LocalStorageController', ['$scope', function($scope) {

    // == CHECK LOCAL STORAGE ==
    //if there's something in local storage
    if(localStorage.getItem('app_data') !== null) {
        $scope.storageArray = retrieveData('app_data');
    }
    //if not, initialize array
    else {
        $scope.storageArray = [];
    }

    // == CREATE NEW BIN ==
    $scope.CreateNewBin = function(type, size, stock) {
        console.log('creating new bin with these parameters: \n'+
        'type: ' + type + ' size:' + size + ' stock: ' + stock
        );

        addToArray($scope.storageArray, {type: type, size: size, stock: stock});
        storeData($scope.storageArray);

        clearInputValues();
    }

    // == CLICK-DESTROY BIN ==
    $scope.destroyBin = function(item) {
        console.log('deleting element: ' + item);

        var index = $scope.storageArray.indexOf(item);
        $scope.storageArray.splice(index, 1);

        storeData($scope.storageArray);
    }

}]);

// ======================
// == HELPER FUNCTIONS ==
// ======================

// == CLEAR INPUT FUNCTIONS ==
function clearInputValues() {
    document.getElementById('type_input').value = '';
    document.getElementById('size_input').value = '';
    document.getElementById('stock_input').value = '';
}

// == ADD TO STORAGE ARRAY ==
function addToArray(array, object){
    array.push(object);

    console.log(array);
}

// == STORE STORAGE ARRAY TO LOCAL STORAGE
function storeData(array){

    var storable = JSON.stringify(array);
    localStorage.setItem('app_data', storable);
    console.log('item stored in "app_data" key: ' + storable);
}

// == RETRIEVE DATA ON STARTUP ==
function retrieveData(key) {
    var parsed = JSON.parse(localStorage.getItem(key));
    console.log('reconstructed array: ' + parsed);
    return parsed;
}


export class OverviewPageCtrl {

  constructor(toastr, overviewApiData, $state,LoaderService, $scope) {
    'ngInject';

    this.LoaderService = LoaderService;

    this.get_all_data_cb = (data) => {
      data = JSON.parse(data);
      data.forEach(function(i,j){
         i.name = JSON.parse(i.name);
      });
      this.customerData  = data;
      $scope.$apply(function(){});
    }

    this.get_all_data = function(){
      overviewApiData.getAllData(this.get_all_data_cb);
    }

    this.get_all_data();
    

    this.getFullName = (first, last) => {
      return `${first} ${last}`;
    };

    this.getPresentableGender = (gen) => {
      var present = "Female";
      if (gen == "m") {
        present = "Male"
      }
      return present;
    };

    this.edit_customer = (id) => {
      $state.go('customer-detail-page', { customer_id: id });
    };

    this.removed_data_cb = () => {
      this.get_all_data();
    }

    this.remove_customer = (id) => {
      overviewApiData.removeCustomer(id,this.removed_data_cb);
    };

  }

}

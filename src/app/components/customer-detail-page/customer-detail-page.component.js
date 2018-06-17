export class CustomerDetailPageCtrl {

  constructor(toastr, $state, CustApiData, overviewApiData) {
    'ngInject';

    this.saveEnable = () => {
        return $state.params.customer_id;
    };

    if(this.saveEnable()=='add'){
      this.customer_data = {};
      this.customer_data.customerID = Number(Object.keys(this.all_data)[this.all_data.length-1]);
      this.customer_data.customerID += 1;
    }

    this.getCustomerCb = (data) => {
        data = JSON.parse(data);
        data.forEach(function(i,j){
           i.name = JSON.parse(i.name);
        });
        this.customer_data = data[0];
    }

    CustApiData.getCustomer($state.params.customer_id, this.getCustomerCb);

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

    this.go_to_overview_cb = () => {
      $state.go("overview-page");
    }

    this.remove_customer = (id) => {
      overviewApiData.removeCustomer(id,this.go_to_overview_cb);
    };

    this.addCustomer = (data) => {
      CustApiData.addCustomer(data,this.go_to_overview_cb);
    };

     this.editCustomer = (data) => {
      CustApiData.editCustomer(data,this.go_to_overview_cb);
    };

  }

}

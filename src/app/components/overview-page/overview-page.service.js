export class OverviewPageApiService {
    constructor(CustData, $http, LoaderService) {
        'ngInject';

        this.getAllData = (cb) => {

            LoaderService.showLoading();

            fetch(CustData.customerData().getAllCustomers, {
              method: 'get'
            }).then(function(response) {
                LoaderService.hideLoading();
                response.text().then(function (responseText) {
                    cb(responseText);  
                }); 
            }).catch(function(err) {
                LoaderService.hideLoading();
            });

        }

        this.removeCustomer = (id,cb) => {

            LoaderService.showLoading();

            fetch(CustData.customerData().removeCustomer, {
              method: 'delete',
              body: JSON.stringify({id : id}),
              headers: {'Content-Type':'application/json'}
            }).then(function(response) {
                LoaderService.hideLoading();
                response.text().then(function (responseText) {
                   cb();
                }); 
            }).catch(function(err) {
                LoaderService.hideLoading();
            });

        }

    }
}
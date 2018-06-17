export class CustomerDataApiService {
    constructor(CustData, LoaderService) {
        'ngInject';

        this.getCustomer = (id, cb) => {
            LoaderService.showLoading();
            fetch(CustData.customerData().getCustomer + id + '/', {
                method: 'get'
            }).then(function(response) {
                LoaderService.hideLoading();
                response.text().then(function(responseText) {
                    cb(responseText);
                });
            }).catch(function(err) {
                LoaderService.hideLoading();
            });
        }

        this.addCustomer = (data, cb) => {
            LoaderService.showLoading();
            fetch(CustData.customerData().addCustomer, {
                method: 'post',
                body: JSON.stringify({ data: data }),
                headers: { 'Content-Type': 'application/json' }
            }).then(function(response) {
                LoaderService.hideLoading();
                response.text().then(function(responseText) {
                    cb();
                });
            }).catch(function(err) {
                LoaderService.hideLoading();
            });
        }

        this.editCustomer = (data, cb) => {
            LoaderService.showLoading();
            fetch(CustData.customerData().updateCustomer, {
                method: 'put',
                body: JSON.stringify({ data: data }),
                headers: { 'Content-Type': 'application/json' }
            }).then(function(response) {
                LoaderService.hideLoading();
                response.text().then(function(responseText) {
                    cb();
                });
            }).catch(function(err) {
                LoaderService.hideLoading();
            });
        }

    }
}
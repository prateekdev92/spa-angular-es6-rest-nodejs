export class CustomerDataService {
    constructor() {
        'ngInject';

        this.serverURL = 'http://production.com/customers/get_customer';

        if (location.href.indexOf('localhost') != -1) {
            this.serverURL = 'http://localhost:3060/customers/';
        }

        this.customerData = () => {
            return {
                getAllCustomers: this.serverURL + 'get_all_customer/',
                getCustomer: this.serverURL + 'get_customer/',
                addCustomer: this.serverURL + 'add/',
                updateCustomer: this.serverURL + 'update/',
                removeCustomer: this.serverURL + 'remove/'
            }
        }
    }
}
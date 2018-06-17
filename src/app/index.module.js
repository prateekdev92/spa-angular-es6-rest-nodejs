import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { OverviewPageCtrl } from '../app/components/overview-page/overview-page.component';
import { CustomerDetailPageCtrl } from '../app/components/customer-detail-page/customer-detail-page.component';
import { CustomerDataService } from '../app/data/data.service';
import { CustomerDataApiService } from '../app/components/customer-detail-page/customer-detail-page.service';
import { OverviewPageApiService } from '../app/components/overview-page/overview-page.service';
import { LoaderService } from '../app/data/loader.service';

import { NavDirective } from '../app/components/navbar/navbar.directive';


angular.module('customerManagement', ['ui.router', 'toastr','angular-loading-bar','ui.bootstrap','ngAnimate'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('OverviewPageCtrl', OverviewPageCtrl)
  .controller('CustomerDetailPageCtrl', CustomerDetailPageCtrl)
  .service('CustData', CustomerDataService)
  .service('overviewApiData', OverviewPageApiService)
  .service('CustApiData', CustomerDataApiService)
  .service('LoaderService', LoaderService)
  .directive('navDirective', NavDirective)
export class LoaderService {
  constructor() {
    'ngInject';

      this.showLoading = () => {
            this.loading = true;
        }

        this.getLoading = () => {
            return this.loading;
        }
        this.hideLoading = () => {
            this.loading = false;
        }

  }
}
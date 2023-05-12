import { observable, action } from 'mobx';

class GlobalStore {
  @observable
  routes = [];

  @action
  setRoutes = (value) => {
    this.routes = value;
  };
}

export default GlobalStore;

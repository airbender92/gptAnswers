import { observable, action } from 'mobx';

class HomeStore {
  @observable
  title = 'home page from store';

  @action
  setTitle = (value: string) => {
    this.title = value;
  }
}

export default HomeStore;
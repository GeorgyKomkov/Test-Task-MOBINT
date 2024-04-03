import cardInfoStore from './cardInfo';
import errorStore from './errors.';
import modalStore from './modal';

class RootStore {
  card = cardInfoStore;

  error = errorStore;

  modal = modalStore;
}

export default RootStore;

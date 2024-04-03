import { makeAutoObservable, runInAction } from 'mobx';
import getAllCards from '../api/api';
import modalStore from './modal';
import errorStore from './errors.';

class CardInfoStore {
  cardsInfo = [];

  isLoading = false;

  activeCard = null;

  isEmpty = false;

  offset = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getCardsInfo = async () => {
    try {
      this.isLoading = true;
      const newCardsInfo = await getAllCards(this.offset);

      runInAction(() => {
        if (newCardsInfo.length === 0) {
          this.isEmpty = true;
          this.isLoading = false;
          return;
        }

        this.cardsInfo.push(...newCardsInfo);
        this.isLoading = false;

        this.offset += 10;
      });
    } catch (error) {
      modalStore.openModlal('error');
      errorStore.addError(error);
    }
  };

  setActiveCard(card) {
    this.activeCard = card;
  }

  filterCards(id) {
    this.isLoading = true;
    this.cardsInfo = this.cardsInfo.filter((card) => card.company.companyId !== id);
    this.isLoading = false;
  }
}

const cardInfoStore = new CardInfoStore();
export default cardInfoStore;

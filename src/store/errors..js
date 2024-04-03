import { makeAutoObservable } from 'mobx';
import { toast } from 'react-toastify';

class ErrorStore {
  error = null;

  text = '';

  constructor() {
    makeAutoObservable(this);
  }

  addError(error) {
    this.error = error;
    switch (error?.response?.status) {
      case 401:
        this.text = 'Ошибка авторизации';
        toast.error('Ошибка авторизации');
        break;
      case 400:
        this.text = error.message;
        toast.error(error.message);
        break;
      case 500:
        this.text = 'Все упало';
        toast.error('Все упало');
        break;
      default:
        this.text = 'Произошла ошибка при загрузке данных';
        toast.error('Произошла ошибка при загрузке данных');
    }
  }

  clearError() {
    this.error = null;
    this.text = '';
  }
}

const errorStore = new ErrorStore();
export default errorStore;

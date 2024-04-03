import { makeAutoObservable} from 'mobx';
// import { fromPromise } from 'mobx-utils';


class ModalStore {
    isOpened = false;
    type = null;
    
    constructor() {
        makeAutoObservable(this);
    }

    openModlal (modalType){
       this.isOpened = true;
       this.type = modalType
    }
    closeModal (){
        this.isOpened = false;
        this.type = null;
    }

}

const modalStore = new ModalStore();
export default modalStore;
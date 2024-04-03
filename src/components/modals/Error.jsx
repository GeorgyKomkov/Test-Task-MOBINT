import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite'
import modalStore from '../../store/modal';
import exclamation from '../../res/img/exclamation_white.png'
import errorStore from '../../store/errors.';
import  { useTranslation } from 'react-i18next';

const ErrorModal = observer(() => {
    const { t } = useTranslation();

    const handleCloseModal = () => {
        modalStore.closeModal();
        errorStore.addError();
    };

    return (

        <ReactModal
            className="modal-content"
            isOpen={modalStore.isOpened && modalStore.type === 'error'}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },

            }}
        > <img
                className='modal-img'
                src={exclamation}
                alt="Удалить карточку"
            />
            <h2>{t('modal.errorTitle')}</h2>
            <p>{errorStore.text}</p>
            <div>
                <button className='modal-button modal-button-close' onClick={handleCloseModal}>{t('modal.buttunClose')}</button>
            </div>

        </ReactModal>

    );
});

export default ErrorModal
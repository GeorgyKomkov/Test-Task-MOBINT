import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite'
import modalStore from '../../store/modal';
import  { useTranslation } from 'react-i18next';


const ShowCard = observer(() => {

    const { t } = useTranslation();

    const handleCloseModal = () => {
        modalStore.closeModal();
    };


    return (

        <ReactModal
            className="modal-content"
            isOpen={modalStore.isOpened && modalStore.type === 'show'}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },

            }}
        >
            <h2>{t('modal.showTitle')}</h2>
            <div>
                <button className='modal-button modal-button-close' onClick={handleCloseModal}>{t('modal.buttunClose')}</button>
            </div>

        </ReactModal>

    );
});

export default ShowCard
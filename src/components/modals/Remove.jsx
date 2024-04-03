import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite'
import modalStore from '../../store/modal';
import cardInfoStore from '../../store/cardInfo';
import { toast } from 'react-toastify';
import  { useTranslation } from 'react-i18next';


const Remove = observer(() => {
    const { t } = useTranslation();
    const handleCloseModal = () => {
        modalStore.closeModal();
    };
    const hendleRemoveCard = () => {
        cardInfoStore.filterCards(cardInfoStore.activeCard.company.companyId)
        modalStore.closeModal();
        toast.success('Вы удалили карточку!');
    }

    return (

        <ReactModal
            className="modal-content"
            isOpen={modalStore.isOpened && modalStore.type === 'remove'}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                content: {
                    width: '50vw',
                    height: 'auto',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                },
            }}
        >
            <h2>{t('modal.removeTitle')} {cardInfoStore.activeCard.mobileAppDashboard.companyName} ? </h2>
        
            <div>
                <button className='modal-button modal-button-delete' onClick={hendleRemoveCard}>{t('modal.buttonRemove')}</button>
                <button className='modal-button modal-button-close' onClick={handleCloseModal}>{t('modal.buttunClose')}</button>
            </div>

        </ReactModal>

    );
});

export default Remove
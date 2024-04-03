import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite'
import { toast } from 'react-toastify';
import  { useTranslation } from 'react-i18next';
import { useStores } from '../../context/root-store-context';


const Remove = observer(() => {
    const { t } = useTranslation();
    const { card , modal } = useStores();
    const handleCloseModal = () => {
        modal.closeModal();
    };
    const hendleRemoveCard = () => {
        card.filterCards(card.activeCard.company.companyId)
        modal.closeModal();
        toast.success('Вы удалили карточку!');
    }

    return (

        <ReactModal
            className="modal-content"
            isOpen={modal.isOpened && modal.type === 'remove'}
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
            <h2>{t('modal.removeTitle')} {card.activeCard.mobileAppDashboard.companyName} ? </h2>
        
            <div>
                <button className='modal-button modal-button-delete' onClick={hendleRemoveCard}>{t('modal.buttonRemove')}</button>
                <button className='modal-button modal-button-close' onClick={handleCloseModal}>{t('modal.buttunClose')}</button>
            </div>

        </ReactModal>

    );
});

export default Remove
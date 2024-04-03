import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite'
import modalStore from '../../store/modal';
import cardInfoStore from '../../store/cardInfo';
import  { useTranslation } from 'react-i18next';


const Detiled = observer(() => {
    const { t } = useTranslation();

    const handleCloseModal = () => {
        modalStore.closeModal();
    };


    return (

        <ReactModal
            className="modal-content"
            isOpen={modalStore.isOpened && modalStore.type === 'detailed'}
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
            <h2>{t('modal.detailed')}</h2>
            <ul>
                <li>{t('modal.name')} - {cardInfoStore.activeCard.mobileAppDashboard.companyName}</li>
                <li>{t('modal.level')} - {cardInfoStore.activeCard.customerMarkParameters.loyaltyLevel.number}</li>
                <li>{t('modal.id')} - {cardInfoStore.activeCard.company.companyId}</li>
                <li>{t('modal.cashToMark')}- {cardInfoStore.activeCard.customerMarkParameters.loyaltyLevel.cashToMark}</li>
                <li>{t('modal.markToCash')}  - {cardInfoStore.activeCard.customerMarkParameters.loyaltyLevel.markToCash}</li>
                <li>{t('modal.requiredSum')}  - {cardInfoStore.activeCard.customerMarkParameters.loyaltyLevel.requiredSum}</li>
                <li>{t('modal.mark')} - {cardInfoStore.activeCard.customerMarkParameters.mark}</li>
            </ul>
            <div>
                <button className='modal-button modal-button-close' onClick={handleCloseModal}>{t('modal.colseButtonDetailed')}</button>
            </div>

        </ReactModal>

    );
});

export default Detiled
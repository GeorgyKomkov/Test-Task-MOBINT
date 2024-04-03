import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../context/root-store-context';

const Detiled = observer(() => {
  const { t } = useTranslation();
  const { modal } = useStores();
  const { card: { activeCard } } = useStores();

  const handleCloseModal = () => modal.closeModal();

  return (
    <ReactModal
      className="modal-content"
      isOpen={modal.isOpened && modal.type === 'detailed'}
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
        <li>
          {t('modal.name')}
          {' '}
          -
          {' '}
          {activeCard.mobileAppDashboard.companyName}
        </li>
        <li>
          {t('modal.level')}
          {' '}
          -
          {' '}
          {activeCard.customerMarkParameters.loyaltyLevel.number}
        </li>
        <li>
          {t('modal.id')}
          {' '}
          -
          {' '}
          {activeCard.company.companyId}
        </li>
        <li>
          {t('modal.cashToMark')}
          -
          {' '}
          {activeCard.customerMarkParameters.loyaltyLevel.cashToMark}
        </li>
        <li>
          {t('modal.markToCash')}
          {' '}
          -
          {' '}
          {activeCard.customerMarkParameters.loyaltyLevel.markToCash}
        </li>
        <li>
          {t('modal.requiredSum')}
          {' '}
          -
          {' '}
          {activeCard.customerMarkParameters.loyaltyLevel.requiredSum}
        </li>
        <li>
          {t('modal.mark')}
          {' '}
          -
          {' '}
          {activeCard.customerMarkParameters.mark}
        </li>
      </ul>
      <div>
        <button
          type="button"
          className="modal-button modal-button-close"
          onClick={handleCloseModal}
        >
          {t('modal.colseButtonDetailed')}
        </button>
      </div>

    </ReactModal>

  );
});

export default Detiled;

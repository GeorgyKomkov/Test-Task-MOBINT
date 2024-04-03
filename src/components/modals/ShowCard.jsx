import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../context/root-store-context';

const ShowCard = observer(() => {
  const { t } = useTranslation();
  const { modal } = useStores();

  const handleCloseModal = () => {
    modal.closeModal();
  };

  return (

    <ReactModal
      className="modal-content"
      isOpen={modal.isOpened && modal.type === 'show'}
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
        <button type="button" className="modal-button modal-button-close" onClick={handleCloseModal}>{t('modal.buttunClose')}</button>
      </div>

    </ReactModal>

  );
});

export default ShowCard;

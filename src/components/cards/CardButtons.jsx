/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import eye from '../../res/img/eye_white.png';
import trashWhite from '../../res/img/trash_white.png';
import { useStores } from '../../context/root-store-context';

const CardsButtons = observer(({ cardInfo }) => {
  const { card, modal } = useStores();
  const { t } = useTranslation();
  const hendleClick = (currentCard, modalType) => {
    modal.openModlal(modalType);
    card.setActiveCard(currentCard);
  };
  return (
    <div className="card-footer">
      <img
        style={{
          backgroundColor: cardInfo.mobileAppDashboard.mainColor,
          marginRight: '20vw',
          marginLeft: '4vw',
        }}
        src={eye}
        alt="Посмотреть"
        className="icon"
        onClick={() => hendleClick(cardInfo, 'show')}
      />
      <img
        style={{
          backgroundColor: cardInfo.mobileAppDashboard.accentColor,
        }}
        src={trashWhite}
        alt="Удалить"
        className="icon"
        onClick={() => hendleClick(cardInfo, 'remove')}
      />

      <button
        type="button"
        className="btn"
        style={{
          backgroundColor: cardInfo.mobileAppDashboard.backgroundColor,
          color: cardInfo.mobileAppDashboard.mainColor,
        }}
        onClick={() => hendleClick(cardInfo, 'detailed')}
      >
        {t('card.buttonDetailedName')}
      </button>
    </div>
  );
});
export default CardsButtons;

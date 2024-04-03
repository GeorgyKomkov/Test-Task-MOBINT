import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import eye from '../../res/img/eye_white.png';
import trashWhite from '../../res/img/trash_white.png';
import EmptyCardsMessage from '../EmptyCardsMessage';
import { useStores } from '../../context/root-store-context';

const Cards = observer(() => {
  const { card, modal } = useStores();
  const { t } = useTranslation();
  const hendleClick = (currentCard, modalType) => {
    modal.openModlal(modalType);
    card.setActiveCard(currentCard);
  };

  return (
    card.cardsInfo.map((cardInfo) => (
      (
        <div key={cardInfo.company.companyId}>
          <div className="card" style={{ backgroundColor: cardInfo.mobileAppDashboard.cardBackgroundColor }}>
            <div className="card-header">
              <p style={
                { color: cardInfo.mobileAppDashboard.highlightTextColor }
}
              >
                {cardInfo.mobileAppDashboard.companyName}
              </p>
              <img
                style={{
                  display: 'inline-block',
                  padding: '5px',
                  borderRadius: '50%',
                }}
                src={cardInfo.mobileAppDashboard.logo}
                alt="Логотип"
              />
            </div>
            <hr />
            <div className="card-body">
              <div className="line">
                <p className="mark" style={{ color: cardInfo.mobileAppDashboard.highlightTextColor }}>
                  {cardInfo.customerMarkParameters.mark}
                </p>
                <span className="description-mark" style={{ color: cardInfo.mobileAppDashboard.textColor }}>
                  {t('pointsCounter.points', { count: +cardInfo.customerMarkParameters.mark })}
                </span>
              </div>
              <div className="line">
                <div className="detail-item">
                  <p style={{ color: cardInfo.mobileAppDashboard.textColor }}>{t('card.cashToMark')}</p>
                  <span
                    style={{ color: cardInfo.mobileAppDashboard.highlightTextColor }}
                  >
                    {cardInfo.customerMarkParameters.loyaltyLevel.cashToMark}
                    %
                  </span>
                </div>
                <div className="detail-item">
                  <p style={{ color: cardInfo.mobileAppDashboard.textColor }}>{t('card.level')}</p>
                  <span
                    style={{ color: cardInfo.mobileAppDashboard.highlightTextColor }}
                  >
                    {cardInfo.customerMarkParameters.loyaltyLevel.name}
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-footer">
              <img
                style={{
                  backgroundColor: cardInfo.mobileAppDashboard.mainColor,
                  marginRight: '20vw',
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

          </div>
          <EmptyCardsMessage />
        </div>

      )
    ))
  );
});

export default Cards;

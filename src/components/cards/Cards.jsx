import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../context/root-store-context';
import CardsButtons from './CardButtons';

const Cards = observer(() => {
  const { card } = useStores();
  const { t } = useTranslation();
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
            <CardsButtons cardInfo={cardInfo} />
          </div>
        </div>

      )
    ))
  );
});

export default Cards;

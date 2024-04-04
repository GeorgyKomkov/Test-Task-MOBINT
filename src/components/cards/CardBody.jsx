import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

const CardBody = observer(({ cardInfo }) => {
  const { t } = useTranslation();

  const { mobileAppDashboard, customerMarkParameters } = cardInfo;

  return (
    <div className="card-body">
      <div className="line">
        <p className="mark" style={{ color: mobileAppDashboard.highlightTextColor }}>
          {customerMarkParameters.mark}
        </p>
        <span className="description-mark" style={{ color: mobileAppDashboard.textColor }}>
          {t('pointsCounter.points', { count: +customerMarkParameters.mark })}
        </span>
      </div>
      <div className="line">
        <div className="detail-item">
          <p style={{ color: mobileAppDashboard.textColor }}>{t('card.cashToMark')}</p>
          <span
            style={{ color: mobileAppDashboard.highlightTextColor }}
          >
            {customerMarkParameters.loyaltyLevel.cashToMark}
            %
          </span>
        </div>
        <div className="detail-item">
          <p style={{ color: mobileAppDashboard.textColor }}>{t('card.level')}</p>
          <span
            style={{ color: mobileAppDashboard.highlightTextColor }}
          >
            {customerMarkParameters.loyaltyLevel.name}
          </span>
        </div>
      </div>
    </div>
  );
});

export default CardBody;

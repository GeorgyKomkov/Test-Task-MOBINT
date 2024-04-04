import { observer } from 'mobx-react-lite';

const CardHeader = observer(({ cardInfo }) => (
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
));

export default CardHeader;

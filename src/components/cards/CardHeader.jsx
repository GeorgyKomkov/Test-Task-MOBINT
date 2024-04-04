import { observer } from 'mobx-react-lite';

const CardHeader = observer(({ cardInfo }) => {
  const { mobileAppDashboard } = cardInfo;

  return (
    <div className="card-header">
      <p style={{ color: mobileAppDashboard.highlightTextColor }}>
        {mobileAppDashboard.companyName}
      </p>
      <img
        style={{
          display: 'inline-block',
          padding: '5px',
          borderRadius: '50%',
        }}
        src={mobileAppDashboard.logo}
        alt="Логотип"
      />
    </div>
  );
});

export default CardHeader;

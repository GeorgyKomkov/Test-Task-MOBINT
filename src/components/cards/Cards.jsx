import { observer } from 'mobx-react-lite';
import { useStores } from '../../context/root-store-context';
import CardsButtons from './CardButtons';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

const Cards = observer(() => {
  const { card } = useStores();
  return (
    card.cardsInfo.map((cardInfo) => (
      (
        <div key={cardInfo.company.companyId}>
          <div className="card" style={{ backgroundColor: cardInfo.mobileAppDashboard.cardBackgroundColor }}>
            <CardHeader cardInfo={cardInfo} />
            <hr />
            <CardBody cardInfo={cardInfo} />
            <hr />
            <CardsButtons cardInfo={cardInfo} />
          </div>
        </div>

      )
    ))
  );
});

export default Cards;

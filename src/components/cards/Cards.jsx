import cardInfoStore from '../../store/cardInfo'
import eye from '../../res/img/eye_white.png';
import trashWhite from "../../res/img/trash_white.png"
import modalStore from '../../store/modal';
import { observer } from 'mobx-react-lite'
import EmptyCardsMessage from '../EmptyCardsMessage';
import  { useTranslation } from 'react-i18next';
// {
//   company: {
//     companyId: "d6295574-5ebe-46df-a13c-c456b753ca0c"
//   },
//   customerMarkParameters: {
//     loyaltyLevel: {
//       number: 4,
//       name: "второй",
//       requiredSum: 18350,
//       markToCash: 71,
//       cashToMark: 17
//     },
//     mark: 9636
//   },
//   mobileAppDashboard: {
//     companyName: "Венская кофейня",
//     logo: "http://bonusmoney.info/image/mail/logo1.png",
//     backgroundColor: "#C609DD",
//     mainColor: "#8C384C",
//     cardBackgroundColor: "#CE1CDD",
//     textColor: "#AFF006",
//     highlightTextColor: "#538694",
//     accentColor: "#2E2937"
//   }
// }



const Cards = observer(() => {
    const { t } = useTranslation();
    const hendleClick = (card, modalType) => {
        modalStore.openModlal(modalType);
        cardInfoStore.setActiveCard(card);
    };

    return (
        cardInfoStore.cardsInfo.map(cardInfo => (
            (
                <div key={cardInfo.company.companyId}>
                    <div className="card" style={{ backgroundColor: cardInfo.mobileAppDashboard.cardBackgroundColor}}>
                        <div className="card-header"   >
                            <p style={{ color: cardInfo.mobileAppDashboard.highlightTextColor}}>{cardInfo.mobileAppDashboard.companyName}</p>
                            <img
                                style={{
                                    display: "inline-block",
                                    padding: "5px",
                                    borderRadius: "50%"
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
                                {t('pointsCounter.points', { count: +cardInfo.customerMarkParameters.mark})} 
                                     </span>
                            </div>
                            <div className="line">
                                <div className="detail-item">
                                    <p style={{ color: cardInfo.mobileAppDashboard.textColor }}>{t('card.cashToMark')}</p>
                                    <span 
                                    style={{ color: cardInfo.mobileAppDashboard.highlightTextColor }}
                                    >{cardInfo.customerMarkParameters.loyaltyLevel.cashToMark}%</span>
                                </div>
                                <div className="detail-item">
                                    <p style={{ color: cardInfo.mobileAppDashboard.textColor, }} >{t('card.level')}</p>
                                    <span
                                    style={{ color: cardInfo.mobileAppDashboard.highlightTextColor }}
                                    >{cardInfo.customerMarkParameters.loyaltyLevel.name}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-footer">
                            <img
                                style={{
                                    backgroundColor: cardInfo.mobileAppDashboard.mainColor,
                                    marginRight: '20vw'
                                }}
                                src={eye}
                                alt="Посмотреть"
                                className="icon"
                                onClick={() => hendleClick(cardInfo, 'show')}
                            />
                            <img
                                style={{
                                    backgroundColor: cardInfo.mobileAppDashboard.accentColor
                                }}
                                src={trashWhite}
                                alt="Удалить"
                                className="icon"
                        
                                onClick={() => hendleClick(cardInfo, 'remove')}
                            />

                            <button className="btn"
                                style={{ backgroundColor: cardInfo.mobileAppDashboard.backgroundColor,
                                color: cardInfo.mobileAppDashboard.mainColor }}
                                onClick={() => hendleClick(cardInfo, 'detailed')}>
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
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import cardInfoStore from '../store/cardInfo';

const EmptyCardsMessage = observer(() => {
  const { t } = useTranslation();
  return (
    cardInfoStore.isEmpty ? (
      <div className="is-empty">
        <p>{t('card.empty')}</p>
      </div>
    ) : null
  );
});

export default EmptyCardsMessage;

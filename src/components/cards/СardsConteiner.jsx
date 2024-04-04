import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import PreloadComponent from '../spiners/PreloadComponent';
import { useStores } from '../../context/root-store-context';
import Cards from './Cards';

const СardsConteiner = observer(() => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { card } = useStores();
  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    card.getCardsInfo();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      card.getCardsInfo();
    }
  }, [isAtBottom]);

  return (
    <>
      <Cards />
      {card.isLoading ? <PreloadComponent /> : null}

    </>
  );
});

export default СardsConteiner;

import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import PreloadComponent from '../spiners/PreloadComponent.jsx';
import cardInfoStore from "../../store/cardInfo.js";
import Cards from './Cards.jsx';



const СardsConteiner = observer(() => {

  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      cardInfoStore.getCardsInfo();

    }
  }, [isAtBottom]);


  useEffect(() => {
    cardInfoStore.getCardsInfo();



  }, []);


  return (
    <>
      <Cards />
      {cardInfoStore.isLoading ? <PreloadComponent /> : null}

    </>
  );

});

export default СardsConteiner;

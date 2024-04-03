import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import getModalComponent from './components/modals/modals';
import HeadingComponent from './components/HeadingComponent';
import СardsConteiner from './components/cards/СardsConteiner';
import LogoIcon from './components/LogoIcon';
import cardInfoStore from './store/cardInfo';
import modalStore from './store/modal';
import UpdateIndicator from './components/spiners/UpdateIndicator';
import 'react-toastify/dist/ReactToastify.css';

const App = observer(() => {
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">

      {firstLoading ? <LogoIcon /> : (
        <>
          <HeadingComponent />
          {getModalComponent(modalStore.type)}
          {cardInfoStore.isLoading ? <UpdateIndicator /> : null}
          <СardsConteiner />
        </>
      )}
      <ToastContainer />
    </div>
  );
});

export default App;

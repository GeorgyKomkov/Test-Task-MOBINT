import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import resources from './locales/index.js';
import RootStore from './store/root-store.js';
import { RootStoreContext } from './context/root-store-context.js';

const Init = () => {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
  });

  return (
    <>
      <I18nextProvider i18n={i18n} />
      <RootStoreContext.Provider value={new RootStore()}>
        <App />
      </RootStoreContext.Provider>
      <I18nextProvider />
    </>
  );
};

export default Init;

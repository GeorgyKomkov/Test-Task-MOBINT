/* eslint-disable no-mixed-operators */
import { ClipLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';

function Preload() {
  const { t } = useTranslation();
  return (
    <div className="preloader-container">

      <ClipLoader color="#1a1a1a" loading size={20 * window.innerWidth / 100} />

      <p className="preloader-text ">{t('spiner.preload')}</p>
    </div>

  );
}

export default Preload;

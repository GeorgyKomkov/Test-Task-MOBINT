import { ClipLoader } from "react-spinners";
import  { useTranslation } from 'react-i18next';

const Preload = () => {
    const { t } = useTranslation();
    return (
        <div className="preloader-container">

            <ClipLoader color={"#1a1a1a"} loading={true} size={20 * window.innerWidth / 100} />

            <p className="preloader-text ">{t('spiner.preload')}</p>
        </div>

    );
}


export default Preload
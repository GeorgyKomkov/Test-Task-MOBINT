import  { useTranslation } from 'react-i18next';

const HeadingComponent = () => {
    const { t } = useTranslation();
    return <div className="heading">
        <p class="heading-text">
           {t('header.header')}
        </p>
    </div>
}
export default HeadingComponent
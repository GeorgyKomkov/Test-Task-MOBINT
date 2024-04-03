
import logo from '../res/img/logo.png'; // Импортируем изображение

const LogoIcon = () => {
  return (
    <div>
      <img src={logo} alt="Логотип" className='logo' />
    </div>
  );
}

export default LogoIcon;
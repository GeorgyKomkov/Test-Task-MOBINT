/* eslint-disable no-mixed-operators */
import { ClipLoader } from 'react-spinners';

const UpdateIndicator = () => (
  <div className="update-indicator">

    <ClipLoader color="#2688eb" loading size={5 * window.innerWidth / 100} />

  </div>

);

export default UpdateIndicator;

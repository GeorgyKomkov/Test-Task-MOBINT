import Remove from './Remove';
import Detiled from './Detailed';
import ShowCard from './ShowCard';
import ErrorModal from './Error';

const modals = {
  show: ShowCard,
  detailed: Detiled,
  remove: Remove,
  error: ErrorModal,
};
const getModal = (type) => modals[type];

const getModalComponent = (type) => {
  if (type === null) return null;

  const ModalComponent = getModal(type);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <ModalComponent />;
};

export default getModalComponent;

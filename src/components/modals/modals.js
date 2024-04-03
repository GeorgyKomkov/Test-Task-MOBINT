import Remove from "../modals/Remove";
import Detiled from "../modals/Detailed";
import ShowCard from "./ShowCard";
import ErrorModal from "./Error";

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

  return <ModalComponent />;
};

export default getModalComponent;

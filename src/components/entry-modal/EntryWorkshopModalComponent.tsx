import DialogComponent from "../dialog/DialogComponent";
import styles from "./EntryWorkshopModalComponent.module.scss";

interface EntryWorkshopModalComponentProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const EntryWorkshopModalComponent: React.FC<
  EntryWorkshopModalComponentProps
> = ({ isModalOpen, closeModal }) => {
  return (
    <>
      <DialogComponent isOpen={isModalOpen} closeDialog={closeModal}>
        <p>Ej</p>
      </DialogComponent>
    </>
  );
};

export default EntryWorkshopModalComponent;

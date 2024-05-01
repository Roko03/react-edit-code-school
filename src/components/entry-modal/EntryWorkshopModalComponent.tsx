import DialogComponent from "../dialog/DialogComponent";
import styles from "./EntryWorkshopModalComponent.module.scss";
import EntryWorkshopFormComponent from "./components/entry-form/EntryWorkshopFormComponent";

interface EntryWorkshopModalComponentProps {
  isModalOpen: boolean;
  closeModal: () => void;
  targetWorkshop: WorkShop | null;
}

const EntryWorkshopModalComponent: React.FC<
  EntryWorkshopModalComponentProps
> = ({ isModalOpen, closeModal, targetWorkshop }) => {
  return (
    <>
      <DialogComponent isOpen={isModalOpen} closeDialog={closeModal}>
        <div className={styles.entry_modal_box}>
          <EntryWorkshopFormComponent targetWorkshop={targetWorkshop} />
        </div>
      </DialogComponent>
    </>
  );
};

export default EntryWorkshopModalComponent;

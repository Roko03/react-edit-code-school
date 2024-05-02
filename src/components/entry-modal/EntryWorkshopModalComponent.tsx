import { useState } from "react";
import DialogComponent from "../dialog/DialogComponent";
import styles from "./EntryWorkshopModalComponent.module.scss";
import EntryWorkshopFormComponent from "./components/entry-form/EntryWorkshopFormComponent";
import SnackBarComponent from "../snack-bar/SnackBarComponent";

interface EntryWorkshopModalComponentProps {
  isModalOpen: boolean;
  closeModal: () => void;
  targetWorkshop: WorkShop | null;
  setEntryWorkshopList: (id: string) => void;
}

const EntryWorkshopModalComponent: React.FC<
  EntryWorkshopModalComponentProps
> = ({ isModalOpen, closeModal, targetWorkshop, setEntryWorkshopList }) => {
  const [isEntrySuccess, setIsEntrySuccess] = useState<boolean | null>(null);
  const [entryMessage, setEntryMessage] = useState<string>("");

  const setEntrySuccess = (message: string, id: string) => {
    setEntryWorkshopList(id);
    setIsEntrySuccess(true);
    setEntryMessage(message);
    closeModal();
  };

  const setEntryError = (message: string) => {
    setIsEntrySuccess(false);
    setEntryMessage(message);
  };

  return (
    <>
      <DialogComponent isOpen={isModalOpen} closeDialog={closeModal}>
        <div className={styles.entry_modal_box}>
          <EntryWorkshopFormComponent
            targetWorkshop={targetWorkshop}
            setEntrySuccess={(message: string, id: string) =>
              setEntrySuccess(message, id)
            }
            setEntryError={(message: string) => setEntryError(message)}
          />
        </div>
      </DialogComponent>
      {isEntrySuccess == null ? (
        <></>
      ) : isEntrySuccess == true ? (
        <SnackBarComponent
          variant={"successful"}
          onClick={() => setIsEntrySuccess(null)}
        >
          <p>{entryMessage}</p>
        </SnackBarComponent>
      ) : (
        <SnackBarComponent
          variant={"error"}
          onClick={() => setIsEntrySuccess(null)}
        >
          <p>{entryMessage}</p>
        </SnackBarComponent>
      )}
    </>
  );
};

export default EntryWorkshopModalComponent;

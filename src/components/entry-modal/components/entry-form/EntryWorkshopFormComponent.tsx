import { z } from "zod";
import styles from "./EntryWorkshopFormComponent.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../button/ButtonComponent";
import entryWorkshop from "../../../../lib/workshop/entryWorkshop";

const entryWorkshopSchema = z.object({
  name: z.string().min(1, { message: "Molimo unesite ime" }),
  surname: z.string().min(1, { message: "Molimo unesite prezime" }),
  email: z.string().email("Unesi ispravan email"),
  info: z
    .string()
    .min(5, { message: "Morate unijeti razlog prijave" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
});

type TEntryWorkshopSchema = z.infer<typeof entryWorkshopSchema>;

interface EntryWorkshopFormComponentProps {
  targetWorkshop: WorkShop | null;
  setEntrySuccess: (message: string, id: string) => void;
  setEntryError: (message: string) => void;
}

const EntryWorkshopFormComponent: React.FC<EntryWorkshopFormComponentProps> = ({
  targetWorkshop,
  setEntrySuccess,
  setEntryError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEntryWorkshopSchema>({
    resolver: zodResolver(entryWorkshopSchema),
  });

  const onSubmit = async (data: TEntryWorkshopSchema) => {
    if (targetWorkshop) {
      const numOfEntry: number = targetWorkshop.numOfEntry + 1;
      const response = await entryWorkshop(
        targetWorkshop.id,
        numOfEntry,
        `${data.name} ${data.surname}`
      );

      if (!response.success) {
        setEntryError(response.message);
      }

      setEntrySuccess(response.message, targetWorkshop.id);
    }

    reset();
  };

  return (
    <form className={styles.entry_form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} placeholder="Unesite ime" />
        {errors.name && (
          <p className={styles.entry_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <input {...register("surname")} placeholder="Unesite prezime" />
        {errors.surname && (
          <p
            className={styles.entry_form__error}
          >{`${errors.surname.message}`}</p>
        )}
      </label>
      <label>
        <input {...register("email")} placeholder="Unesite email" />
        {errors.email && (
          <p
            className={styles.entry_form__error}
          >{`${errors.email.message}`}</p>
        )}
      </label>
      <label>
        <textarea {...register("info")} placeholder="Unesite razlog prijave" />
        {errors.info && (
          <p className={styles.entry_form__error}>{`${errors.info.message}`}</p>
        )}
      </label>
      <ButtonComponent
        variant={"add"}
        onClick={handleSubmit(onSubmit)}
        enabled={isSubmitting}
      >
        <p>Prijavi se na radionicu</p>
      </ButtonComponent>
    </form>
  );
};

export default EntryWorkshopFormComponent;

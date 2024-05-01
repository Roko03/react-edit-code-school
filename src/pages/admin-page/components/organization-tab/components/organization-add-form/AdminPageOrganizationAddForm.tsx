import { z } from "zod";
import styles from "./AdminPageOrganizationAddForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";

const addOrganizationSchema = z.object({
  name: z.string().min(1, { message: "Unesite ime organizacije" }),
  info: z
    .string()
    .min(5, { message: "Morate unijeti informacije o radionici" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
});

type TAddOrganizationSchema = z.infer<typeof addOrganizationSchema>;

const AdminPageOrganizationAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddOrganizationSchema>({
    resolver: zodResolver(addOrganizationSchema),
  });

  const onSubmit = async (data: TAddOrganizationSchema) => {
    reset();
    console.log(data);
  };

  return (
    <form className={styles.add_form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} placeholder="Unesite ime organizacije" />
        {errors.name && (
          <p className={styles.add_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <textarea
          {...register("info")}
          placeholder="Unesite opis organizacije"
        />
        {errors.info && (
          <p className={styles.add_form__error}>{`${errors.info.message}`}</p>
        )}
      </label>
      <ButtonComponent
        variant={"add"}
        enabled={isSubmitting}
        onClick={handleSubmit(onSubmit)}
      >
        <p>Dodaj organizaciju</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageOrganizationAddForm;

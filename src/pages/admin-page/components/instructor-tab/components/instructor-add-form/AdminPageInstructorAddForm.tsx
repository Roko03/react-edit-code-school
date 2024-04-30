import { string, z } from "zod";
import styles from "./AdminPageInstructorAddForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";

const addInstructorSchema = z.object({
  name: z.string().min(1, { message: "Unesite ime" }),
  biography: z
    .string()
    .min(5, { message: "Morate unijeti informacije o predavaču" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
  organization: z.array(z.object({ organizationId: z.string() })),
});

type TAddInstructorSchema = z.infer<typeof addInstructorSchema>;

const AdminPageInstructorAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddInstructorSchema>({
    resolver: zodResolver(addInstructorSchema),
  });

  const onSubmit = (data: TAddInstructorSchema) => {
    reset();
    console.log(data);
  };

  return (
    <form className={styles.add_form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} placeholder="Unesi ime predavača" />
        {errors.name && (
          <p className={styles.add_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <textarea {...register("biography")} placeholder="Unesite podatke" />
        {errors.biography && (
          <p
            className={styles.add_form__error}
          >{`${errors.biography.message}`}</p>
        )}
      </label>
      <div className={styles.add_form__checkboxs}>
        <div className={styles.add_form__checkboxs__item}>
          <input type="checkbox" id="id1" />
          <label htmlFor={"id1"}>Label 1</label>
        </div>
        <div className={styles.add_form__checkboxs__item}>
          <input type="checkbox" id="id2" />
          <label htmlFor={"id2"}>Label 2</label>
        </div>
      </div>
      <ButtonComponent variant={"add"} onClick={handleSubmit(onSubmit)}>
        <p>Napravi predavača</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageInstructorAddForm;

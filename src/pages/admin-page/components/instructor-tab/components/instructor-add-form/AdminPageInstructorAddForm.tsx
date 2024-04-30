import { string, z } from "zod";
import styles from "./AdminPageInstructorAddForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import { useEffect, useState } from "react";
import CircularProgressComponent from "../../../../../../components/circular-progress/CircularProgressComponent";
import getOrganizations from "../../../../../../lib/getOrganizations";

const addInstructorSchema = z.object({
  name: z.string().min(1, { message: "Unesite ime" }),
  biography: z
    .string()
    .min(5, { message: "Morate unijeti informacije o predavaču" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
  organization: z.union([z.string(), z.array(z.string())]),
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

  const [organizationList, setOrganizationList] = useState<
    Organization[] | null
  >(null);

  const fetchOrganizations = async () => {
    const response = await getOrganizations();

    setOrganizationList(response);
  };

  const onSubmit = (data: TAddInstructorSchema) => {
    reset();
    console.log(data);
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  if (organizationList == null) return <CircularProgressComponent />;

  return (
    <form className={styles.add_form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} placeholder="Unesi ime predavača" />
        {errors.name && (
          <p className={styles.add_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <input type="file" accept="image/*" />
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
        {organizationList.map((organizationItem, index) => {
          return (
            <div className={styles.add_form__checkboxs__item} key={index}>
              <input
                type="checkbox"
                id={`${organizationItem.id}`}
                value={organizationItem.id}
                {...register("organization")}
              />
              <label htmlFor={`${organizationItem.id}`}>
                {organizationItem.name}
              </label>
            </div>
          );
        })}
        {errors.organization && (
          <p
            className={styles.add_form__error}
          >{`${errors.organization.message}`}</p>
        )}
      </div>
      <ButtonComponent variant={"add"} onClick={handleSubmit(onSubmit)}>
        <p>Napravi predavača</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageInstructorAddForm;

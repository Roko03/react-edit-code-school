import { useForm } from "react-hook-form";
import styles from "./AdminPageOrganizationEditForm.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import uuidv4 from "../../../../../../util/uuidv4";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";

const addOrganizationSchema = z.object({
  name: z.string().min(1, { message: "Unesite ime organizacije" }),
  info: z
    .string()
    .min(5, { message: "Morate unijeti informacije o radionici" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
});

type TAddOrganizationSchema = z.infer<typeof addOrganizationSchema>;

interface AdminPageOrganizationEditFormProps {
  fetchOrganization: () => void;
  closeModal: () => void;
  openSuccessSnackBar: (message: string) => void;
  openErrorSnackBar: (message: string) => void;
}

const AdminPageOrganizationEditForm: React.FC<
  AdminPageOrganizationEditFormProps
> = ({
  fetchOrganization,
  closeModal,
  openSuccessSnackBar,
  openErrorSnackBar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddOrganizationSchema>({
    resolver: zodResolver(addOrganizationSchema),
  });

  const onSubmit = async (data: TAddOrganizationSchema) => {
    const organizationObject: Organization = {
      id: uuidv4(),
      ...data,
    };

    // const response;

    // closeModal();

    // if (!response.success) {
    //   openErrorSnackBar(response.messsage);
    //   return;
    // }

    reset();
    //openSuccessSnackBar(response.messsage);
    fetchOrganization();
  };
  return (
    <form className={styles.edit_form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} placeholder="Unesite ime organizacije" />
        {errors.name && (
          <p className={styles.edit_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <textarea
          {...register("info")}
          placeholder="Unesite opis organizacije"
        />
        {errors.info && (
          <p className={styles.edit_form__error}>{`${errors.info.message}`}</p>
        )}
      </label>
      <ButtonComponent
        variant={"add"}
        enabled={isSubmitting}
        onClick={handleSubmit(onSubmit)}
      >
        <p>Uredi organizaciju</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageOrganizationEditForm;

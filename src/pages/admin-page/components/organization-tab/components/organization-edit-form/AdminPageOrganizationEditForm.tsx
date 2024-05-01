import { useForm } from "react-hook-form";
import styles from "./AdminPageOrganizationEditForm.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import uuidv4 from "../../../../../../util/uuidv4";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import { useEffect } from "react";
import editOrganization from "../../../../../../lib/editOrganization";

const editOrganizationSchema = z.object({
  name: z.string().min(1, { message: "Unesite ime organizacije" }),
  info: z
    .string()
    .min(5, { message: "Morate unijeti informacije o radionici" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
});

type TEditOrganizationSchema = z.infer<typeof editOrganizationSchema>;

interface AdminPageOrganizationEditFormProps {
  fetchOrganization: () => void;
  targetOrganization: Organization | null;
  closeModal: () => void;
  openSuccessSnackBar: (message: string) => void;
  openErrorSnackBar: (message: string) => void;
}

const AdminPageOrganizationEditForm: React.FC<
  AdminPageOrganizationEditFormProps
> = ({
  fetchOrganization,
  targetOrganization,
  closeModal,
  openSuccessSnackBar,
  openErrorSnackBar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEditOrganizationSchema>({
    resolver: zodResolver(editOrganizationSchema),
  });

  const onSubmit = async (data: TEditOrganizationSchema) => {
    if (targetOrganization != null) {
      const organizationObject: Organization = {
        id: targetOrganization.id,
        ...data,
      };

      const response = await editOrganization(
        targetOrganization.id,
        organizationObject
      );

      closeModal();

      if (!response.success) {
        openErrorSnackBar(response.message);
        return;
      }

      reset();
      openSuccessSnackBar(response.message);
      fetchOrganization();
    }
  };

  useEffect(() => {
    if (targetOrganization != null) {
      const organizationFormData: TEditOrganizationSchema = {
        name: targetOrganization.name,
        info: targetOrganization.info,
      };
      reset(organizationFormData);
    }
  }, [targetOrganization]);

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

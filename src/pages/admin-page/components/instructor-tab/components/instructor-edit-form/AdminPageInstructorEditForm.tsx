import styles from "./AdminPageInstructorEditForm.module.scss";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import { useEffect, useState } from "react";
import CircularProgressComponent from "../../../../../../components/circular-progress/CircularProgressComponent";
import getOrganizations from "../../../../../../lib/getOrganizations";
import uploadInstructorImage from "../../../../../../lib/uploadInstructorImage";
import editInstructor from "../../../../../../lib/instructor/editInstructor";

const editInstructorSchema = z.object({
  name: z.string().min(1, { message: "Unesite ime" }),
  biography: z
    .string()
    .min(5, { message: "Morate unijeti informacije o predavaču" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
  organization: z.union([z.string(), z.array(z.string())]),
});

type TEditInstructorSchema = z.infer<typeof editInstructorSchema>;

interface AdminPageInstructorEditFormProps {
  targetInstructor: Instructor | null;
  fetchInstructor: () => void;
  closeModal: () => void;
  openSuccessSnackBar: (message: string) => void;
  openErrorSnackBar: (message: string) => void;
}

const AdminPageInstructorEditForm: React.FC<
  AdminPageInstructorEditFormProps
> = ({
  targetInstructor,
  fetchInstructor,
  closeModal,
  openErrorSnackBar,
  openSuccessSnackBar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEditInstructorSchema>({
    resolver: zodResolver(editInstructorSchema),
  });

  const [organizationList, setOrganizationList] = useState<
    Organization[] | null
  >(null);

  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const [imageUpload, setImageUpload] = useState<string>("");
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);

  const fetchOrganizations = async () => {
    const response = await getOrganizations();

    setOrganizationList(response);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setIsImageUploading(true);

    const response = await uploadInstructorImage(file);

    if (!response.success) {
      setIsImageUploading(false);
      openErrorSnackBar(response.message);
      return;
    }

    if (response.imageUrl) {
      setImageUpload(response.imageUrl);
    }
    openSuccessSnackBar(response.message);
    setIsImageUploading(false);
  };

  const onSubmit = async (data: TEditInstructorSchema) => {
    if (targetInstructor) {
      let instructorObject: Instructor;

      if (imageUpload == "") {
        instructorObject = {
          id: targetInstructor.id,
          ...data,
          imageUrl: targetInstructor.imageUrl,
        };
      } else {
        instructorObject = {
          id: targetInstructor.id,
          ...data,
          imageUrl: imageUpload,
        };
      }

      const response = await editInstructor(
        targetInstructor.id,
        instructorObject
      );

      if (!response.success) {
        closeModal();
        openErrorSnackBar(response.message);
        return;
      }

      reset();
      closeModal();
      openSuccessSnackBar(response.message);
      fetchInstructor();
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  useEffect(() => {
    if (targetInstructor != null) {
      const instructorFormData: TEditInstructorSchema = {
        name: targetInstructor.name,
        biography: targetInstructor.biography,
        organization: targetInstructor.organization,
      };
      reset(instructorFormData);
    }
  }, [targetInstructor]);

  useEffect(() => {
    const enable = isSubmitting || isImageUploading;
    setIsButtonEnabled(enable);
  }, [isSubmitting, isImageUploading]);

  if (organizationList == null) return <CircularProgressComponent />;

  return (
    <form className={styles.edit_form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("name")} placeholder="Unesi ime predavača" />
        {errors.name && (
          <p className={styles.add_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
        />
      </label>
      <label>
        <textarea {...register("biography")} placeholder="Unesite podatke" />
        {errors.biography && (
          <p
            className={styles.edit_form__error}
          >{`${errors.biography.message}`}</p>
        )}
      </label>
      <div className={styles.edit_form__checkboxs}>
        {organizationList.map((organizationItem, index) => {
          return (
            <div className={styles.edit_form__checkboxs__item} key={index}>
              <input
                type="checkbox"
                id={`${organizationItem.id}`}
                value={organizationItem.name}
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
            className={styles.edit_form__error}
          >{`${errors.organization.message}`}</p>
        )}
      </div>
      <ButtonComponent
        variant={"add"}
        onClick={handleSubmit(onSubmit)}
        enabled={isButtonEnabled}
      >
        <p>Uredi predavača</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageInstructorEditForm;

import { z } from "zod";
import styles from "./AdminPageWorkshopEditForm.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import provideDefaultDifficultyData from "../../../../../../components/data/SelectDifficultyData";
import provideDefaultSubjectData from "../../../../../../components/data/SelectSubjectData";
import { useEffect, useState } from "react";
import getInstructors from "../../../../../../lib/getInstructors";
import uploadWorkshopImage from "../../../../../../lib/uploadWorkshopImage";

const difficultyArray = provideDefaultDifficultyData();
const subjectsArray = provideDefaultSubjectData();

const editWorkshopScehma = z.object({
  name: z.string().min(1, { message: "Unesite ime radionice" }),
  date: z.string().min(1, { message: "Unesite datum radionice" }),
  instructor: z.string().min(1, { message: "Morate odabrati predavača" }),
  info: z
    .string()
    .min(5, { message: "Morate unijeti informacije o radionici" })
    .max(350, { message: "Ne smije imati poviše 350 znakova" }),
  level: z.enum(difficultyArray, {
    errorMap: () => ({ message: "Molimo odaberite težinu" }),
  }),
  subject: z.enum(subjectsArray, {
    errorMap: () => ({ message: "Molimo odaberite temu" }),
  }),
});

type TEditWorkshopSchema = z.infer<typeof editWorkshopScehma>;

interface AdminPageWorkshopEditFormProps {
  openSuccessSnackBar: (message: string) => void;
  openErrorSnackBar: (message: string) => void;
  closeModal: () => void;
}

const AdminPageWorkshopEditForm: React.FC<AdminPageWorkshopEditFormProps> = ({
  openSuccessSnackBar,
  openErrorSnackBar,
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEditWorkshopSchema>({
    resolver: zodResolver(editWorkshopScehma),
  });

  const [upladImageError, setUploadImageError] = useState<boolean>(false);
  const [imageUploaded, setImageUploaded] = useState<string>("");
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const [instructorList, setInstructorList] = useState<Instructor[] | null>(
    null
  );

  const fetchInstructor = async () => {
    const response = await getInstructors();

    setInstructorList(response);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setIsImageUploading(true);
    const response = await uploadWorkshopImage(file);

    if (!response.success) {
      openErrorSnackBar(response.message);
      setIsImageUploading(false);
      return;
    }

    if (response.imageUrl) {
      setImageUploaded(response.imageUrl);
    }

    openSuccessSnackBar(response.message);
    setIsImageUploading(false);
  };

  const onSubmit = async () => {
    if (imageUploaded == "") {
      setUploadImageError(true);
      return;
    }

    reset();
    setUploadImageError(false);
  };

  useEffect(() => {
    fetchInstructor();
  }, []);

  useEffect(() => {
    const isEnabled = isImageUploading || isSubmitting;
    setIsButtonEnabled(isEnabled);
  }, [isImageUploading, isSubmitting]);

  if (instructorList == null) {
    return <p>Problem sa bazom</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.edit_form}>
      <label>
        <input
          type="text"
          {...register("name")}
          placeholder="Upiši ime radionice"
        />
        {errors.name && (
          <p className={styles.edit_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="date"
          {...register("date")}
          placeholder="Upiši ime radionice"
        />
        {errors.date && (
          <p className={styles.edit_form__error}>{`${errors.date.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e)}
          accept="image/*"
        />
        {upladImageError && (
          <p className={styles.edit_form__error}>Odaberi sliku</p>
        )}
      </label>
      <label>
        <select {...register("instructor")}>
          <option value="">Izaberi predavača</option>
          {instructorList.length > 0 ? (
            <>
              {instructorList.map((instructor) => {
                return (
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.name}
                  </option>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </select>
        {errors.instructor && (
          <p
            className={styles.edit_form__error}
          >{`${errors.instructor.message}`}</p>
        )}
      </label>
      <label>
        <textarea
          {...register("info")}
          placeholder="Unesite informacije o radionici"
        />
        {errors.info && (
          <p className={styles.edit_form__error}>{`${errors.info.message}`}</p>
        )}
      </label>
      <label>
        <select {...register("level")}>
          <option value="">Odaberite težinu</option>
          {difficultyArray.map((difficulty, index) => {
            return (
              <option key={index} value={difficulty}>
                {difficulty}
              </option>
            );
          })}
        </select>
        {errors.level && (
          <p className={styles.edit_form_error}>{`${errors.level.message}`}</p>
        )}
      </label>
      <label>
        <select {...register("subject")}>
          <option value="">Odaberite temu</option>
          {subjectsArray.map((subject, index) => {
            return (
              <option key={index} value={subject}>
                {subject}
              </option>
            );
          })}
        </select>
        {errors.subject && (
          <p
            className={styles.edit_form__error}
          >{`${errors.subject.message}`}</p>
        )}
      </label>
      <ButtonComponent
        enabled={isButtonEnabled}
        variant={"add"}
        onClick={handleSubmit(onSubmit)}
      >
        <p>Uredi radionicu</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageWorkshopEditForm;

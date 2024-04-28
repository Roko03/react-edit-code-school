import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdminPageWorkshopAddForm.module.scss";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import provideDefaultDifficultyData from "../../../../../../components/data/SelectDifficultyData";
import provideDefaultSubjectData from "../../../../../../components/data/SelectSubjectData";
import { useEffect, useState } from "react";
import getInstructors from "../../../../../../lib/getInstructors";

const difficultyArray = provideDefaultDifficultyData();

const addWorkshopScehma = z.object({
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
});

type TAddWorkshopSchema = z.infer<typeof addWorkshopScehma>;

const AdminPageWorkshopAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddWorkshopSchema>({
    resolver: zodResolver(addWorkshopScehma),
  });

  const subjectsArray: string[] = provideDefaultSubjectData();

  const [instructorList, setInstructorList] = useState<Instructor[] | null>(
    null
  );

  const fetchInstructor = async () => {
    const response = await getInstructors();

    setInstructorList(response);
  };

  const onSubmit = (data: TAddWorkshopSchema) => {
    reset();
    console.log(data);
  };

  useEffect(() => {
    fetchInstructor();
  }, []);

  if (instructorList == null) {
    return <p>Problem sa bazom</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.add_form}>
      <label>
        <input
          type="text"
          {...register("name")}
          placeholder="Upiši ime radionice"
        />
        {errors.name && (
          <p className={styles.add_form__error}>{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="date"
          {...register("date")}
          placeholder="Upiši ime radionice"
        />
        {errors.date && (
          <p className={styles.add_form__error}>{`${errors.date.message}`}</p>
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
            className={styles.add_form__error}
          >{`${errors.instructor.message}`}</p>
        )}
      </label>
      <label>
        <textarea
          {...register("info")}
          placeholder="Unesite informacije o radionici"
        />
        {errors.info && (
          <p className={styles.add_form__error}>{`${errors.info.message}`}</p>
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
          <p className={styles.add_form__error}>{`${errors.level.message}`}</p>
        )}
      </label>
      <ButtonComponent
        enabled={isSubmitting}
        variant={"add"}
        onClick={handleSubmit(onSubmit)}
      >
        <p>Dodaj radionicu</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminPageWorkshopAddForm;

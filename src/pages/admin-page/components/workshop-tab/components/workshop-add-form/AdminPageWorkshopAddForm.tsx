import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdminPageWorkshopAddForm.module.scss";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import provideDefaultDifficultyData from "../../../../../../components/data/SelectDifficultyData";
import provideDefaultSubjectData from "../../../../../../components/data/SelectSubjectData";

const addWorkshopScehma = z.object({
  name: z.string().min(1, { message: "Unesite ime radionice" }),
  imageUrl: z.string(),
  date: z.string(),
  instructor: z.string(),
  info: z.string(),
  level: z.string(),
  numOfEntry: z.number(),
  tags: z.string(),
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

  const difficultyArray: string[] = provideDefaultDifficultyData();

  const subjectsArray: string[] = provideDefaultSubjectData();

  const onSubmit = (data: TAddWorkshopSchema) => {
    console.log(data);
    reset();
  };

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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "../../utils/toast";
import { Modal } from "../Modal/Modal";

const appointmentSchema = z.object({
  fullname: z.string().nonempty("Campo obrigatório."),
  cpf: z
    .string()
    .nonempty("Campo obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "cpf inválido"),
  birthdate: z.date().max(new Date(), "Recém nascido, vá pra um hospital."),
  address: z.string().nonempty("Campo obrigatório."),
  amount: z.number().nonnegative("O valor tem que ser maior ou igual a zero."),
});
interface Props {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type AppointmentData = z.infer<typeof appointmentSchema>;
export function AppointmentForm({ isModalVisible, setIsModalVisible }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullname: "",
      cpf: "",
      birthdate: new Date(),
      address: "",
      amount: 0,
    },
  });
  function handleCloseModal() {
    setIsModalVisible((prevState: boolean) => !prevState);
  }
  function onSubmit(data: AppointmentData) {
    console.log(data);
    toast({
      text: "consulta marcada com sucesso!",
      type: "success"
    })
    handleCloseModal();
  }
  return (
    <Modal
      title="Agendar consulta"
      visible={isModalVisible}
      onCancel={handleCloseModal}
      onConfirm={handleSubmit(onSubmit)}
    >
      <form
        noValidate
        className="border-gray-400 border rounded mt-10 bg-gray-100 w-full p-4 gap-4"
      >
        <fieldset className="flex flex-col">
          <label htmlFor="name">Nome completo:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome..."
            {...register("fullname")}
            className={`rounded p-1 border-gray-400 border ${
              errors.fullname ? "border-red-400" : ""
            } `}
          />
          <small className="text-red-400">{errors.fullname?.message}</small>
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            {...register("cpf")}
            className={`rounded p-1 border-gray-400 border ${
              errors.cpf ? "border-red-400" : ""
            } `}
          />
          <small className="text-red-400">{errors.cpf?.message}</small>
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="birthdate">Data de nascimento:</label>
          <input
            type="date"
            id="birthdate"
            {...register("birthdate", { valueAsDate: true })}
            className={`rounded p-1 border-gray-400 border ${
              errors.birthdate ? "border-red-400" : ""
            } `}
          />
          <small className="text-red-400">{errors.birthdate?.message}</small>
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            {...register("address")}
            className={`rounded p-1 border-gray-400 border ${
              errors.address ? "border-red-400" : ""
            } `}
          />
          <small className="text-red-400">{errors.address?.message}</small>
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="amount">Valor à ser pago:</label>
          <input
            type="number"
            id="amount"
            className={`rounded p-1 border-gray-400 border ${
              errors.amount ? "border-red-400" : ""
            } `}
            {...register("amount", { valueAsNumber: true })}
            readOnly
          />
          <small className="text-red-400">{errors.amount?.message}</small>
        </fieldset>
      </form>
    </Modal>
  );
}

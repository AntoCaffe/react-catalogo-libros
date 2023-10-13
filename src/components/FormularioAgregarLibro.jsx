import { useForm } from "react-hook-form";

const FormularioAgregarLibro = ({ agregarLibro }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    agregarLibro(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="título"> Título </label>
          <input
            id="título"
            name="título"
            {...register("título", { required: "Este campo es requerido" })}
          />
          {errors.título && <span>{errors.título.message}</span>}
        </div>
        <div>
          <label htmlFor="autor">Autor</label>
          <input
            id="autor"
            name="autor"
            {...register("autor", { required: "Este campo es requerido" })}
          />
        </div>
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  );
};

export default FormularioAgregarLibro;

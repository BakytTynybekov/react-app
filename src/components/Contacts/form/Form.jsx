import { useForm } from "react-hook-form";
import "./form.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => console.log(data);

  //   console.log(watch("example"));
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Ваше имя"
          {...register("name", {
            required: "Это поле не должно быть пустым",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          placeholder="Телефон"
          {...register("phone", {
            required: "Это поле не должно быть пустым",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        <input
          placeholder="Ваш E-mail"
          {...register("email", {
            required: "Это поле не должно быть пустым",
            minLength: {
              value: 3,
              message: "Минимум 3 символа",
            },

            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Неправильный формат почты",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <textarea
          name=""
          id=""
          cols="100%"
          rows="100%"
          placeholder="Ваше сообщение..."
          {...register("message")}
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

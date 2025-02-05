import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import iconApp from "../../../public/image/logo.svg";
import "../styles/login.css";
import { useForm } from "react-hook-form";

export function LoginEntertainmentApp() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  const [formAccount, setFormAccount] = useState(false);

  const handleClickForm = () => {
    setFormAccount((prevState) => !prevState);
  };

  // Función para limpiar errores al escribir
  const handleInputChange = (field) => {
    if (errors[field]) {
      clearErrors(field);
    }
  };

  return (
    <>
      <article className="content__allLogin-and-SingUp">
        <div className="bx-logo">
          <img src={iconApp} alt="Logo" className="logo" />
        </div>

        <section className="content__allSection">
          <span className="loginTitle">
            {!formAccount ? "Login" : "Sign Up"}
          </span>

          <form className="bx-formLogin" onSubmit={handleSubmit(onSubmit)}>
            <motion.section
              className="bx-inputs_login"
              initial={{ maxHeight: 120 }}
              animate={{ maxHeight: formAccount ? 250 : 120 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="bx-inputs">
                <input
                  type="email"
                  id="emailAddress"
                  className={`stylesForInputs ${
                    errors.email ? "error-border" : ""
                  }`}
                  placeholder="Email address"
                  {...register("email", {
                    required: "Can't be empty",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onInput={() => handleInputChange("email")}
                />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>

              <div className="bx-inputs">
                <input
                  type="password"
                  id="password"
                  className={`stylesForInputs ${
                    errors.password ? "error-border" : ""
                  }`}
                  placeholder="Password"
                  {...register("password", {
                    required: "Can't be empty",
                  })}
                  onInput={() => handleInputChange("password")}
                />
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>

              <AnimatePresence mode="wait">
                {formAccount && (
                  <div className="bx-inputs">
                    <motion.input
                      type="password"
                      id="repeatPassword"
                      className={`stylesForInputs ${
                        errors.repeatPassword ? "error-border" : ""
                      }`}
                      placeholder="Repeat password"
                      {...register("repeatPassword", {
                        required: "Can't be empty",
                      })}
                      onInput={() => handleInputChange("repeatPassword")}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {errors.repeatPassword && (
                      <span className="error">
                        {errors.repeatPassword.message}
                      </span>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </motion.section>

            <section className="bx-btn-account">
              <button type="submit" className="btnAccount">
                {!formAccount ? "Login to your account" : "Create an account"}
              </button>

              <span className="descriptionAccount">
                {!formAccount
                  ? "Don’t have an account?"
                  : "Already have an account?"}

                <span className="styleTextColorFull" onClick={handleClickForm}>
                  {!formAccount ? " Sign Up" : " Login"}
                </span>
              </span>
            </section>
          </form>
        </section>
      </article>
    </>
  );
}

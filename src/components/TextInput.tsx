import React from "react";
import { FieldError } from "react-hook-form";

interface TextInputProps {
  name: string;
  placeholder: string;
  type: string;
  register: string; // Utilisez le bon type de register ici
  styles: string;
  labelStyle: string;
  error: string | FieldError | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  type,
  register,
  styles,
  labelStyle,
  error,
}) => {
  return (
    <div>
      <input
        name={name} // Assurez-vous que la propriété name est correctement utilisée ici
        placeholder={placeholder}
        type={type}
        ref={register}
        className={styles}
      />
      <label className={labelStyle}>{name}</label>
      {error && typeof error === "string" ? (
        <span role="alert" className="text-sm text-[#f64949fe] mt-0.5">
          {error}
        </span>
      ) : error && typeof error === "object" ? (
        <span role="alert" className="text-sm text-[#f64949fe] mt-0.5">
          {error.message}
        </span>
      ) : null}
    </div>
  );
};

export default TextInput;

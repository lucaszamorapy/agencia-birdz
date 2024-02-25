import { useState } from "react";

const InputField = ({ id, type, placeholder, validate, ...rest }) => {
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (validate && typeof validate === "function") {
      setError(validate(value));
    }
  };

  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2  rounded-md focus:outline-none ${
          error ? "border-red-500" : ""
        }`}
        onChange={handleChange}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default InputField;
import { useState } from "react";
import InputField from "../../utils/inputfield/InputField";
import Button from "../../utils/button/ButtonBirdz";


const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Por favor, insira um email válido";
};

const isPhoneValid = (phone) => {
  const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone)
    ? ""
    : "Por favor, insira um número de telefone válido";
};

const Forms = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, company, message } = formValues;

    setIsLoading(true);

    if (!name || !email  || !company) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios");
      setIsLoading(false);
      return;
    } else if (isEmailValid(email)) {
      setErrorMessage(isEmailValid(email));
      setIsLoading(false);
      return;
    } 

    // Se tudo estiver válido, continue com o envio do formulário
    setErrorMessage(""); // Limpa a mensagem de erro se não houver nenhum

    const formData = new FormData();
    formData.append("nome", name);
    formData.append("email", email);
    formData.append("empresa", company);
    formData.append("mensagem", message);

    try {
      const response = await fetch(
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setResponseMessage(
          `Muito obrigado por entrar em contato, em breve retornamos.`
        );
      } else {
        const data = await response.json();
        setErrorMessage("Erro ao enviar o email: " + data.message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-10 w-[350px] bg-black py-10 rounded-lg shadow-lg lg:w-auto ">
      <h1 className="text-2xl uppercase text-yellowBirdz font-semibold mb-5">
        Entre em contato
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="px-12 text-red-500">{errorMessage}</div>
        )}
        {responseMessage && (
          <div className=" text-green-500">{responseMessage}</div>
        )}
        <div className="flex flex-col justify-center gap-5 lg:flex-row ">
          <InputField
            id="name"
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            validate={(value) => (value ? "" : "Por favor, insira seu nome")}
          />

          <InputField
            id="email"
            type="text"
            placeholder="Digite seu email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            validate={isEmailValid} // Usando a função isEmailValid para validar o email
          />
        </div>
          <InputField
            id="company"
            type="text"
            placeholder="Nome da sua empresa"
            name="company"
            value={formValues.company}
            onChange={handleInputChange}
          />
        <textarea
          id="message"
          className="w-full px-5 py-2  rounded-md focus:outline-none"
          rows="4"
          placeholder="Digite sua mensagem"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          disabled={isLoading} // Desabilita o botão se estiver carregando
          className="w-full uppercase text-yellowBirdz bg-orangeLogline-100 font-semibold text-lg py-2 hover:text-yellowHover duration-300 cursor-pointer rounded-md"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Forms;
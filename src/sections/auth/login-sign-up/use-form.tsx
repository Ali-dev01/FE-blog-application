import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";

interface FormDataTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface PasswordTypes {
  password: boolean;
  confirmPassword: boolean;
}

interface ReturnTypes {
  hasError: boolean;
  pathname: string;
  showPassword: PasswordTypes;
  formData: FormDataTypes;
  togglePassword: (type: keyof PasswordTypes) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const initialState = {
  password: false,
  confirmPassword: false,
};

const formValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function useFormHandler(): ReturnTypes {
  const [hasError, setHasError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<PasswordTypes>(initialState);
  const [formData, setFormData] = useState<FormDataTypes>(formValues);

  const { pathname } = useLocation();

  const togglePassword = (type: keyof PasswordTypes): void => {
    setShowPassword((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isError = Object.values(formData).some((value: string) => value.trim() === "");
    setHasError(isError);
    if (isError) toast.error("All fields are required");
    console.log("Form submitted:", formData);
  };

  return {
    pathname,
    formData,
    hasError,
    showPassword,
    togglePassword,
    handleChange,
    handleSubmit,
  };
}

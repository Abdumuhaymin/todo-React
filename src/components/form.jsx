import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const Forms = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    axios
      .post("http://localhost:3600/user", data)
      .catch((errors) => {
        toast.error(errors);
      })
      .finally(() => toast.success("yaxshi bo'ldi"));
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="mb-[50px] mx-auto w-[600px] flex justify-between items-center"
    >
      <input
        className="bg-input p-input rounded-[33px] "
        {...register("name", { required: true }, { reset: true })}
        type="text"
      />
      <button
        type="submit"
        className="bg-bgMain px-[15px] rounded-[50%] py-[15px] translate-x-[-92px]"
      >
        Add
      </button>
    </form>
  );
};

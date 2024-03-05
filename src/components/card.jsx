import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

export const Card = ({ id, name }) => {
  const deleteItem = () => {
    axios
      .delete(`http://localhost:3600/user/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .finally(() => toast.info("deleted"));
  };

  const editItem = () => {
    toast.error("ishlatomadim");
  };
  return (
    <>
      <div className="border-2 mx-auto text-center py-[15px]  px-[10px] border-input w-[200px]">
        <p className="font-medium text-input text-lg">№{id}</p>
        <h1 className="font-bold text-3xl text-title mb-[20px]">{name}</h1>
        <button
          onClick={deleteItem}
          className="bg-input font-medium text-title text-lg mb-[15px] px-[59px] rounded-[10px] py-[15px]"
        >
          DELETE
        </button>
        <button
          onClick={editItem}
          className="bg-input font-medium text-title text-lg mb-[15px] px-[70px] rounded-[10px] py-[15px]"
        >
          EDIT
        </button>
      </div>
    </>
  );
};

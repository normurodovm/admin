import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div className="">
        <img src={img} alt="img" />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="p-4 bg-yellow-400 text-white rounded-xl"
          >
          show Product
        </button>
        <button className="p-4 bg-red-600 text-white rounded-2xl">Delete</button>
        <button className="p-4 bg-green-400 rounded-2xl text-white">Edit</button>
      </div>
    </div>
  );
};

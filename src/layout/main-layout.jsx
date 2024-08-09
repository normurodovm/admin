import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex">
      <div className=" bg-slate-500 h-screen p-[20px] w-[300px]">
        <div className="bg-slate-300 p-2 rounded-xl mb-3  " >
          <Link to={"/"}>Home</Link>
        </div>
        <div className="bg-slate-300 p-2 rounded-xl mb-3" >
          <Link to={"/category-list"}>Category list</Link>
        </div>
        <div className="bg-slate-300 p-2 rounded-xl" >
          <Link to={"/all-product"}>All Products</Link>
        </div>
      </div>
      <div className="w-full flex-grow-1 p-7">
        <Outlet />
      </div>
    </div>
  );
};

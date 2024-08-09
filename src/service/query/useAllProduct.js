import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const userAllProduct = () => {
  return useQuery({
    queryKey: ["category-list"],
    queryFn: () => request.get("/products").then((res) => res.data),
  });
};

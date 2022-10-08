import { postJson, deleteRequest, getJson, patchJson } from "../../utils/fetch";
import { QueryKey } from "react-query";

interface QueryParams {
  queryKey: QueryKey;
}

export const CustomerAPI = {
  signUp: (data: any) => postJson("/api/customer/sign-up", data, false),
  login: (data: any) => {
    sessionStorage.setItem("customer", "true");
    return postJson("/api/customer/session/new", data, true);
  },
  signOut: () => {
    sessionStorage.removeItem("customer");
    return deleteRequest("/api/customer/session");
  },
  me: () => getJson("/api/customer/me", true),
  updateMe: (data: any) => patchJson("/api/customer/me", data, false),
  deleteMe: (data: any) => postJson("/api/customer/me/delete", data, false),
  popularProducts: ({ queryKey: [_, limits] }: QueryParams) =>
    getJson(`/api/customer/products/popular?limit=${limits}`, true),
};

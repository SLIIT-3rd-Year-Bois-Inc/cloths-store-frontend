import { QueryKey } from "react-query";
import { deleteRequest, getJson, postJson } from "../../utils/fetch";

interface QueryParams {
  queryKey: any;
}

export const AdminAPI = {
  login: (data: any) => {
    sessionStorage.setItem("admin", "true");
    return postJson("/api/admin/session/new", data, true);
  },
  signOut: () => {
    sessionStorage.removeItem("admin");
    return deleteRequest("/api/admin/session");
  },
  allCustomers: ({ queryKey: [_, __, { from, to, search }] }: QueryParams) =>
    getJson(`/api/admin/customer/all?from=${from}&to=${to}&q=${search}`, true),

  statsByGender: ({ queryKey: [_, __] }: QueryParams) => {
    return getJson(`/api/admin/stats/by-gender`, true);
  },
  statsByAge: ({ queryKey: [_, __] }: QueryParams) => {
    return getJson(`/api/admin/stats/by-age`, true);
  },
};

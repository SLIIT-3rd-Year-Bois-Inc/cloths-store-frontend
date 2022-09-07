import { QueryKey } from "react-query";
import { getJson } from "../../utils/fetch";

interface QueryParams {
  queryKey: QueryKey;
}

export const AdminAPI = {
  allCustomers: ({ queryKey: [_, from, to] }: QueryParams) =>
    getJson(`/api/admin/customer/all?from=${from}&to=${to}`, true),
};

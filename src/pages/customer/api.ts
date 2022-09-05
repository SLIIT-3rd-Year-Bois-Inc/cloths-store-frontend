import { postJson, deleteRequest } from "../../utils/fetch";

export const CustomerAPI = {
  signUp: (data: any) => postJson("/api/customer/sign-up", data, false),
  login: (data: any) => postJson("/api/customer/session/new", data, true),
  signOut: () => deleteRequest("/api/customer/session"),
};

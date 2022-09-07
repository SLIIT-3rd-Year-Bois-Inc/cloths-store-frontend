import { postJson, deleteRequest, getJson } from "../../utils/fetch";

export const CustomerAPI = {
  signUp: (data: any) => postJson("/api/customer/sign-up", data, false),
  login: (data: any) => postJson("/api/customer/session/new", data, true),
  signOut: () => deleteRequest("/api/customer/session"),
  me: () => getJson("/api/customer/me", true),
};

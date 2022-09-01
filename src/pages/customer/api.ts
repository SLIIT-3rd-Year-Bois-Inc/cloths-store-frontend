import { API_ENDPOINT } from "../../config";
import { postJson } from "../../utils/fetch";

export const CustomerAPI = {
  sign_up: (data: any) => postJson("/api/customer/sign-up", data, false),
  login: (data: any) => postJson("/api/customer/session/new", data, true),
};

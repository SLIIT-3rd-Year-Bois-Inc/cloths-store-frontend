import { postJson, deleteRequest, getJson, patchJson } from "../../utils/fetch";
import { QueryKey } from "react-query";
import { Buffer } from "buffer";

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
  verifyCustomer: (data: any) =>
    getJson(
      `/api/customer/verify?id=${Buffer.from(data.id).toString(
        "base64"
      )}&code=${data.code}`,
      false
    ),
  getCustomerOrders: (data: any) => getJson(`/api/order/me`, true),
  addPaymentMethod: (data: any) =>
    postJson("/api/customer/payment-method", data, false),
  getPaymentMethods: () => getJson(`/api/customer/payment-method`, true),
  deletePaymentMethod: (data: any) =>
    deleteRequest(`/api/customer/payment-method/${data.id}`),
  patchPaymentMethod: (data: any) =>
    patchJson(`/api/customer/payment-method/${data.id}`, data, false),
  addToWishlist: (data: any) => {
    postJson(`/api/customer/wishlist`, data, false);
  },
  removeFromWishList: (data: any) =>
    deleteRequest(`/api/customer/wishlist/${data.id}`),
  getWishlist: () => getJson(`/api/customer/wishlist`, true),
};

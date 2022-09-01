import { API_ENDPOINT } from "../config";

export async function postJson(
  endpoint: string,
  data: any,
  json_response: boolean
) {
  let res = await fetch(`${API_ENDPOINT}${endpoint}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (res.status >= 300) {
    throw new Error(`Received json ${res.status}`);
  }

  if (json_response) return res.json();
}

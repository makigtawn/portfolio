import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL ?? "";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

async function request(path, { method = "GET", body } = {}) {
  try {
    const res = await client.request({ url: path, method, data: body });
    return res.data;
  } catch (err) {
    const message = err.response?.data?.error || "Something went wrong. Please try again.";
    throw new Error(message, { cause: err });
  }
}

export const apiGet = (path, opts) => request(path, { ...opts, method: "GET" });
export const apiPost = (path, body, opts) => request(path, { ...opts, method: "POST", body });
export const apiPut = (path, body, opts) => request(path, { ...opts, method: "PUT", body });
export const apiPatch = (path, body, opts) => request(path, { ...opts, method: "PATCH", body });
export const apiDelete = (path, opts) => request(path, { ...opts, method: "DELETE" });

export async function apiUpload(path, file) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await client.post(path, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    const message = err.response?.data?.error || "Upload failed. Please try again.";
    throw new Error(message, { cause: err });
  }
}

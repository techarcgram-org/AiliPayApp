import {AxiosRequestHeaders} from "axios"

export default function createHeaders(
  contentType = "application/json",
  accessToken
) {
  return {
    "Content-Type": contentType,
    Accept: "*/*",
    "Access-Control-Allow-Headers": "*",
    ...(accessToken && {Authorization: `Bearer ${accessToken}`}),
  }
}
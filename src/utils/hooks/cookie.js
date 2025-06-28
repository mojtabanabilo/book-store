// src/utils/hooks/cookie.js
import Cookies from "js-cookie";

export const setTokenCookie = (token) => {
  Cookies.set("token", token, {
    expires: 7,
    secure: false,
    sameSite: "Strict",
  });
};

export const getTokenCookie = () => {
  return Cookies.get("token");
};

export const removeTokenCookie = () => {
  Cookies.remove("token");
};

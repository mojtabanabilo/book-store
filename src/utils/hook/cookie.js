import Cookies from "js-cookie";

export const setTokenCookie = (token) => {
  Cookies.set("token", token, {
    expires: 7,
    secure: true,
    sameSite: "Strict",
  });
};

export const getTokenCookie = () => {
  return Cookies.get("token");
};

export const removeTokenCookie = () => {
  Cookies.remove("token");
};

export const saveLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

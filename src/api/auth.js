import axiosInstance from ".";

export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response; 
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const login  = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/login', data)
    return response;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
}
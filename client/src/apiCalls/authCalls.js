import axios from "axios";

// 👇 make sure this points to your backend
const BASE_URL = "http://localhost:8000/api/auth";

export const signUp = async (userData) => {
  try {
    const res = await axios.post(`${BASE_URL}/signup`, userData, {
      withCredentials: true, // because your backend sets a cookie
    });
    return res.data;
  } catch (err) {
    console.error("Signup error:", err.response?.data || err);
    throw err;
  }
};

export const signIn = async (userData) => {
  try {
    const res = await axios.post(`${BASE_URL}/signin`, userData, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.error("Signin error:", err.response?.data || err);
    throw err;
  }
};

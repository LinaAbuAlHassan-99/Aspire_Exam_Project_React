//npm i axios
import axios from "axios";

export const GetLoginData = async (email, password) => {
  try {
    const { data } = await axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    return data;
  } catch (e) {
    throw e;
  }
};

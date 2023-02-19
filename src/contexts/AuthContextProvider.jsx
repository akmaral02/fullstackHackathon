import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH } from "../helpers/consts";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  //! FUN-ON FOR REGISTER

  const register = async (formData) => {
    try {
      let form = new FormData();
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("password_confirm", formData.password_confirm);
      const res = await axios.post(`${API_AUTH}register/`, formData);
      setSuccess(res.data);
      console.log(res.data);
      // navigate("/login"); //! над что то придумать
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //? END FUN-ON FOR REGISTER

  //! FUN-ON FOR LOGIN

  const login = async (formData, email) => {
    try {
      let form = new FormData();
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("password_confirm", formData.password_confirm);
      const res = await axios.post(`${API_AUTH}login/`, formData);
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      setUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //? END FUN-ON FOR LOGIN

  //! FUN-ON FOR REFRESHIG TOKEN

  const checkAuth = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      let res = await axios.post(`${API_AUTH}refresh/`, {
        refresh: token.refresh, // check the key
      });
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let user = localStorage.getItem("username");
      setUser(user);
    } catch (error) {
      // console.log(error);
      setError(error.response.data.email[0]);
    }
  };

  //? END FUN-ON FOR REFRESHIG TOKEN

  //! useEffect call func checkAuth every time when the app rendering
  //!so he will work incorrect thats why we call this func if we have in localStorage data under key token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  //! dont know do it on local storage cus in back we have this function

  //! FUN-ON FOR LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/login");
  };

  //? END FUN-ON FOR LOGOUT

  //! FUN-ON FOR GETTING CODE IF FORGOT PASSWORD

  const forgotPassword = async (email) => {
    try {
      let res = await axios.post(`${API_AUTH}forgot_password/`, email);
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUN-ON FOR GETTING CODE IF FORGOT PASSWORD

  //! FUN-ON FOR COMPLETE NEW PASSWORD

  const forgotPasswordComplete = async (complete) => {
    try {
      let res = await axios.post(
        `${API_AUTH}forgot_password_complete/`,
        complete
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUN-ON FOR COMPLETE NEW PASSWORD

  //! FUN-ON FOR CHANGE TO NEW PASSWORD

  // const changeOldPassword = async (changedPassword) => {
  //   try {
  //     let res = await axios.post(
  //       `${API_AUTH}change_passsword/`,
  //       changedPassword
  //     );
  //     navigate("/");
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  //? END FUN-ON FOR CHANGE TO NEW PASSWORD

  let value = {
    error,
    user,
    register,
    login,
    logout,
    forgotPassword,
    forgotPasswordComplete,
    success,
    // changeOldPassword,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;

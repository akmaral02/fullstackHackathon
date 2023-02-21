import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH } from "../helpers/consts";
import { getToken } from "../helpers/function";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }
  //! FUN-ON FOR REGISTER

  const register = async (formData) => {
    try {
      let form = new FormData();
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("password_confirm", formData.password_confirm);
      const res = await axios.post(`${API_AUTH}register/`, formData);
      setSuccess(res.data);
      refreshPage();
    } catch (error) {
      setError(error.response.data.email[0]);
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
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      setUser(email);
      navigate("/");
      // setSuccess("Welcome to Journey");
    } catch (error) {
      // setError(error.response.data.detail);
      setError("Не правильный пароль или email");
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

  //*

  //! FUN-ON FOR LOGOUT

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/auth");
  };

  //? END FUN-ON FOR LOGOUT

  //! FUN-ON FOR GETTING CODE IF FORGOT PASSWORD

  const forgotPassword = async (email) => {
    try {
      let res = await axios.post(`${API_AUTH}forgot_password/`, email);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
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
      console.log(res.data);
      navigate("/auth");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //? END FUN-ON FOR COMPLETE NEW PASSWORD

  //! FUN-ON FOR CHANGE TO NEW PASSWORD

  const changeOldPassword = async (changedPassword) => {
    try {
      let config = getToken();
      let res = await axios.post(
        `${API_AUTH}change_password/`,
        changedPassword,
        config
      );
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //? END FUN-ON FOR CHANGE TO NEW PASSWORD

  //! FUNC-ON FOR DELETE ACCOUNT

  const deleteAccount = async () => {
    try {
      let config = getToken();
      let res = await axios.delete(`${API_AUTH}delete/`, config);
      console.log(res.data);
      logout();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //? END FUNC-ON FOR DELETE ACCOUNT

  //! FUNC-ON FOR change email

  // const updateEmail = async (changedEmail) => {
  //   try {
  //     let config = getToken();
  //     let res = await axios.patch(`${API_AUTH}update/`, changedEmail, config);
  //     localStorage.setItem("username", changedEmail);
  //     setUser(changedEmail);
  //     // navigate(login);
  //     login();
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //   }
  // };
  //? END FUNC-ON FOR change email

  let value = {
    error,
    user,
    register,
    login,
    logout,
    forgotPassword,
    forgotPasswordComplete,
    success,
    changeOldPassword,
    deleteAccount,
    // updateEmail,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;

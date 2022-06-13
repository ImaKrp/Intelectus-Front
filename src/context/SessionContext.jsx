import React, { useState, useEffect, createContext } from "react";
import { api } from "../api/api";
import {
  changeLocalData,
  getLocalData,
  deleteLocalData,
  // changeSessionData,
  getSessionData,
} from "../utils/Storage";

const initialState = [];
export const SessionContext = createContext(initialState);

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(
    getLocalData("@autistas:User") ?? getSessionData("@autistas:User")
  );
  const [token, setToken] = useState(
    getLocalData("@autistas:Token") ?? getSessionData("@autistas:Token")
  );

  const [logged, setLogged] = useState(false);

  const signOut = () => {
    deleteLocalData("@autistas:User");
    deleteLocalData("@autistas:Token");
    setUser();
    setToken();
    setLogged(false);
  };

  useEffect(() => {
    if (!user || !token) {
      signOut();
      return;
    }

    if (!logged)
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;

    setLogged(true);
  }, [user, token, logged]);

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post("/authenticate", {
        email,
        password,
      });

      setLogged(true);
      changeLocalData("@xpense:user", JSON.stringify(data.user));
      changeLocalData("@xpense:token", JSON.stringify(data.token));
      setUser(data.user);
      setToken(data.token);
      alert("Logou putinha");
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    } catch (err) {
      return err?.response?.data?.error;
    }
  };

  const signUp = async (name, email, password) => {
    try {
      await api.post("/register", { name, email, password });
      await signIn(email, password);
    } catch (err) {
      return err?.response?.data?.error;
    }
  };

  const passwordRecovery = async (email) => {
    try {
      const { data } = await api.post("/recover", { email });
      alert(data?.message);
    } catch (err) {
      return err?.response?.data?.error;
    }
  };

  const changePassword = async (password, id) => {
    try {
      const { data } = await api.patch(`/recover/${id}`, { password });
      alert(data?.message);
    } catch (err) {
      return err?.response?.data?.error;
    }
  };

  // const updateUser = (object: IUpdateData): void => {
  //   let updateData: IUpdateData = {
  //     email: user?.email,
  //     region: user?.region
  //   }
  //   object.email && (updateData.email = object.email);
  //   object.region && (updateData.region = object.region);
  //   setUser(updateData);
  //   localStorage.setItem("@xpense:user", JSON.stringify(updateData));
  // };

  return (
    <SessionContext.Provider
      value={{
        logged,
        token,
        user,
        signOut,
        signIn,
        signUp,
        passwordRecovery,
        changePassword,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

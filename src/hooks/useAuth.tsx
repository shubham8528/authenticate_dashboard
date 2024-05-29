import React, { useEffect, useState } from "react";
import { LoginActionReq } from "../redux/modules/signUp/action";
import { useDispatch } from "react-redux";

function useAuth() {
  const dispatch = useDispatch();
  const [credntial, setCredential] = useState({ userId: "", password: "" });
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredential({ ...credntial, [name]: value });
  };
  const handleCLick = (e: any) => {
    e.preventDefault();
    // dispatch(LoginActionReq());
  };

  const loginData = [
    {
      id: 0,
      lable: "Username",
      type: "text",
      name: "userId",
      value: credntial?.userId,
    },
    {
      id: 1,
      lable: "Password",
      type: "password",
      name: "password",
      value: credntial?.password,
    },
  ];
  return { credntial, handleChange, loginData, handleCLick };
}
export default useAuth;

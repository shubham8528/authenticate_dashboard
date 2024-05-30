import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginActionReq } from "../redux/modules/signUp/action";
import { useNavigate } from "react-router-dom";
import { SignInActionReq } from "../redux/modules/signIn/action";
interface credintial {
  email: string;
  password: string;
}
function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credntial, setCredential] = useState<credintial>({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredential({ ...credntial, [name]: value });
  };
  const handleCLick = (e: any, item: string) => {
    e.preventDefault();
    if (item == "signUp") {
      dispatch(LoginActionReq(credntial));
      navigate("/");
    } else {
      console.log("SignInActionReq");
      dispatch(SignInActionReq(credntial));
    }
  };

  const loginData = [
    {
      id: 0,
      lable: "Username",
      type: "text",
      name: "email",
      value: credntial?.email,
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

import { FormEvent } from "react";
import { userInfos } from "../App";
import { baseApi } from "./baseApi";

export const handleSubmit = async (e: FormEvent, userInfos: userInfos) => {
  e.preventDefault();
  const resenha = document.querySelector("#re-senha") as HTMLInputElement;
  if (resenha.value == userInfos.password) {
    console.log(userInfos);
    baseApi.post("/new-student", userInfos).then((res) => {
      if (res.status == 400) {
        alert(res.data.error)
      }
      if (res.status == 200) {
        alert(res.data.message)
      }
    });
  } else {
    alert("Confirme a senha corretamente");
  }
};

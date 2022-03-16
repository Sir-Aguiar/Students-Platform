import { FormEvent } from "react";
import { userInfos } from "../App";
import { baseApi } from "./baseApi";

export const handleSubmit = async (e: FormEvent, userInfos: userInfos) => {
  e.preventDefault();
  const resenha = document.querySelector("#re-senha") as HTMLInputElement;
  if (resenha.value == userInfos.password) {
    console.log(userInfos);
    baseApi.post("/new-student", userInfos).then((res) => {
      if (res.status == 200) {
        return alert("Criado com sucesso");
      } if (res.status == 401) {
        return alert("Nome de usuário e/ou email já em uso");
      } 
        return alert("Verifique as informações inseridas");
    });
  } else {
    alert("Confirme a senha corretamente");
  }
};

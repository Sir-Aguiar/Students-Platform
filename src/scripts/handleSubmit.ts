import { FormEvent } from "react";
import { userInfos } from "../App";
import { baseApi } from "./baseApi";

export const handleSubmit = async (e: FormEvent, userInfos: userInfos) => {
  e.preventDefault();
  const resenha = document.querySelector("#re-senha") as HTMLInputElement;
  if (resenha.value == userInfos.password) {
    baseApi
      .post("/new-student", userInfos)
      .then((res) => {
        if (res.status == 201) {
          alert(res.data.message);
        }
      })
      .catch((e) => {
        const message = e.message;
        if (message == "Request failed with status code 400") {
          alert("Nome de usuário ou Email já em uso!");
        }
      });
  }
}
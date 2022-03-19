import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { BsInstagram, BsFillShareFill, BsLinkedin, BsTwitter } from "react-icons/bs";
import { baseApi } from "./scripts/baseApi";
import { handleSubmit } from "./scripts/handleSubmit";
export type userInfos = {
  name: string;
  password: string;
  login: string;
  email: string;
  _class: string;
};
const App = () => {
  const [turmas, setTurmas] = useState<string[]>([]);
  const [pickedClass, setClass] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userFullName, setUserFullName] = useState<string>("");
  const userInfos: userInfos = {
    name: userFullName,
    password: userPassword,
    login: userName,
    email: userEmail,
    _class: pickedClass,
  };

  useEffect(() => {
    baseApi.get("/getclasses").then((res) => {
      if (res.status == 200) {
        setTurmas(res.data.classes);
      }
    });
  }, []);

  return (
    <div className="mainContainer">
      <form className="registerForm" onSubmit={(e) => handleSubmit(e, userInfos)}>
        <div className="topSide bg-[#eceded]">
          <h1 className="text-[26px] my-2 font-Plex text-center font-semibold text-slate-800">
            Facilite sua rotina escolar!
          </h1>
        </div>
        <div className="flex flex-row xlg:flex-col h-full">
          <div className="bg-indigo-500 leftSide flex-1 lg:flex-[0.6] bg-[url('/2480553.png')] bg-center bg-contain bg-no-repeat flex items-end"></div>
          <div className="bg-[#eceded] p-1 rightSide flex-1 flex flex-col items-center">
            <div className="m-4">
              <div className="VinputField overflow-x-hidden">
                <div className="HinputField">
                  <input
                    type="text"
                    id="nome"
                    placeholder="Nome completo"
                    required
                    className="fieldInput"
                    onChange={(e) => setUserFullName(e.target.value)}
                  />
                  <input
                    type="text"
                    id="login"
                    placeholder="Usuário"
                    required
                    className="fieldInput"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="fieldInput"
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="HinputField">
                <input
                  type="password"
                  id="senha"
                  placeholder="Senha"
                  required
                  className="flex-1 fieldInput"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <input
                  type="password"
                  id="re-senha"
                  placeholder="Confirme a senha"
                  required
                  className="flex-1 fieldInput"
                />
              </div>
              <div className="HinputField">
                <label htmlFor="">Escolha sua turma</label>
                <select className="selector" required onChange={(e) => setClass(e.target.value)}>
                  {turmas.map((turma) => (
                    <option key={turma} value={turma}>
                      {turma}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="submiter" type="submit">
              Solicitar Acesso
            </button>
            <a href="#" className="formLink">
              Como funcionam nossos serviços?
            </a>
            <a href="#" className="formLink ">
              Já possui uma conta?
            </a>
            <div className="social">
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsLinkedin />
              </span>
              <span>
                <BsFillShareFill />
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;

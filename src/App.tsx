import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import {
  BsInstagram,
  BsFillShareFill,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { baseApi } from "./scripts/baseApi";
const App = () => {
  const [turmas, setTurmas] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="mainContainer">
      <form className="registerForm" onSubmit={(e) => handleSubmit(e)}>
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
                <input
                  type="text"
                  id="nome"
                  placeholder="Nome completo"
                  required
                  className="fieldInput"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="fieldInput"
                  required
                />
              </div>
              <div className="HinputField">
                <input
                  type="password"
                  id="senha"
                  placeholder="Senha"
                  required
                  className="flex-1 fieldInput"
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
                <select className="selector" required>
                  <option>Escolha sua turma</option> {/* Remover */}
                  {turmas.map((turma) => (
                    <option>{turma}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="submiter" type="submit">Solicitar Acesso</button>
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

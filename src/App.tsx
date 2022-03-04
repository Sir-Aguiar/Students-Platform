import "./App.css";

const App = () => {
  return (
    <div className="mainContainer">
      <form className="registerForm">
        <div className="topSide bg-[#eceded]">
          <h1 className="text-[26px] my-2 font-Plex text-center font-semibold text-slate-800">
            Facilite sua rotina escolar!
          </h1>
        </div>
        <div className="flex flex-row xlg:flex-col h-full">
          <div className="bg-indigo-500 leftSide flex-1 lg:flex-[0.6] bg-[url('/2480553.png')] bg-center bg-contain bg-no-repeat flex items-end">
            
          </div>
          <div className="bg-[#eceded] p-1 rightSide flex-1 flex flex-col items-center">
            <div className="m-4">
              <div className="VinputField overflow-x-hidden">
                <input
                  type="text"
                  id="nome"
                  placeholder="Nome completo"
                  className="fieldInput"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="fieldInput"
                />
              </div>
              <div className="HinputField">
                <input
                  type="password"
                  id="senha"
                  placeholder="Senha"
                  className="flex-1 fieldInput"
                />
                <input
                  type="password"
                  id="re-senha"
                  placeholder="Confirme a senha"
                  className="flex-1 fieldInput"
                />
              </div>
              <div className="HinputField">
                <select className="border-[1px] mx-1 border-neutral-500 outline-none bg-slate-300">
                  <option>Escolha sua turma</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              value="Solicitar acesso"
              className="submiter"
            />
            <a href="#" className="formLink">Como funcionam nossos serviços?</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;

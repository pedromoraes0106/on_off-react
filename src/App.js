import "./styles.css";
import logado from "./img/plano.jpg";
import nao_logado from "./img/question.png";
import React from "react";

//Função de usuario cadastrado
function UsuarioCadastrado(props) {
  return (
    <div>
      <h1>Logado</h1>
      <img src={logado} alt="pink floyd image" />
      <h2>Bem-vindo</h2>
    </div>
  );
}

//Função de usuario nao cadastrado
function NaoCadastrado(props) {
  return (
    <div>
      <h1>Usuário não cadastrado</h1>
      <img src={nao_logado} alt="Não logado" />
      <h2>Por favor, realize seu cadastro.</h2>
    </div>
  );
}

function BotaoEntrar(props) {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      Entrar
    </button>
  );
}

//Verifica se esta logado ou nao
function Mensagem(props) {
  const estaLogado = props.estaLogado;

  if (estaLogado) {
    return <UsuarioCadastrado />;
  }
  return <NaoCadastrado />;
}

class ControleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.LidaClickLogar = this.LidaClickLogar.bind(this);
    this.LidaClickSair = this.LidaClickSair.bind(this);

    this.state = { estaLogado: false };
  }

  LidaClickLogar() {
    this.setState({ estaLogado: true });
  }

  LidaClickSair() {
    this.setState({ estaLogado: false });
  }

  render() {
    const estaLogado2 = this.state.estaLogado;
    let botao;

    if (estaLogado2) {
      botao = <BotaoSair onClick={this.LidaClickSair} />;
    } else {
      botao = <BotaoEntrar onClick={this.LidaClickLogar} />;
    }

    return (
      <div>
        <Mensagem estaLogado={estaLogado2} />
        {botao}
      </div>
    );
  }
}

function BotaoSair(props) {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      Sair
    </button>
  );
}

export default function App() {
  return (
    <div className="App container text-center mt-3">
      <ControleLogin />
    </div>
  );
}

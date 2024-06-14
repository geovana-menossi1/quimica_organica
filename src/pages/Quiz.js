import React, { useState } from 'react';

const Quiz = () => {
  const perguntas = [
    {
      pergunta: 'Qual é a capital do Brasil?',
      respostas: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
      respostaCorreta: 'Brasília'
    },
    {
      pergunta: 'Quem escreveu "Dom Casmurro"?',
      respostas: ['Machado de Assis', 'Guimarães Rosa', 'Clarice Lispector', 'Carlos Drummond de Andrade'],
      respostaCorreta: 'Machado de Assis'
    },
    // Adicione mais perguntas conforme necessário
  ];

  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [pontuacao, setPontuacao] = useState(0);
  const [quizIniciado, setQuizIniciado] = useState(false);
  const [quizCompleto, setQuizCompleto] = useState(false);

  const handleComecarQuiz = () => {
    setQuizIniciado(true);
  };

  const handleResposta = (resposta) => {
    setRespostaSelecionada(resposta);

    if (resposta === perguntas[indicePergunta].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    setTimeout(() => {
      if (indicePergunta + 1 < perguntas.length) {
        setIndicePergunta(indicePergunta + 1);
        setRespostaSelecionada('');
      } else {
        setQuizCompleto(true);
      }
    }, 1000); // Delay de 1 segundo para avançar para a próxima pergunta
  };

  const handleProximaPergunta = () => {
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
      setRespostaSelecionada('');
    } else {
      setQuizCompleto(true);
    }
  };

  const handleFinalizarQuiz = () => {
    setQuizCompleto(true);
  };

  return (
    <div className="quiz-container">
      {quizCompleto ? (
        <div>
          <h1>Parabéns! Quiz concluído!</h1>
          <p>Sua pontuação final é: {pontuacao} de {perguntas.length}</p>
          <div>
            <h2>Respostas:</h2>
            <ul>
              {perguntas.map((pergunta, index) => (
                <li key={index}>
                  <strong>{pergunta.pergunta}</strong><br />
                  Sua resposta: {index < perguntas.length ? (pergunta.respostas.find(x => x === respostaSelecionada) ? "Correta" : "Errada") : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h1>Seja Bem Vindo!</h1>
          {!quizIniciado ? (
            <div>
              <p>Aperte no botão para iniciar seu quiz</p>
              <div>
                <button className="btn" onClick={handleComecarQuiz}>
                  <i className="animation"></i>Começar agora!<i className="animation"></i>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Pergunta {indicePergunta + 1}</h2>
              <p>{perguntas[indicePergunta].pergunta}</p>
              <ul className="respostas">
                {perguntas[indicePergunta].respostas.map((resposta, index) => (
                  <li key={index}>
                    <button
                      className={`btn ${resposta === respostaSelecionada ? 'selected' : ''}`}
                      disabled={respostaSelecionada !== ''}
                      onClick={() => handleResposta(resposta)}
                    >
                      {resposta}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="botoes-navegacao">
                <button className="btn" onClick={handleProximaPergunta}>
                  {indicePergunta === perguntas.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;

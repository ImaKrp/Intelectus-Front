import React from "react";
import { Header, Game, About } from "./styles";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Collapse } from "../../components/Collapse";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <div>
          <p>Intelectus</p>
        </div>
        <div className="nav">
          <Link to="/signin">Login</Link>
        </div>
      </Header>
      <Game id="jogo">
        <div></div>
        <div>
          <img src="/images/logo.png" alt="Logo" />
          <button
            type="button"
            onClick={() => {
              navigate("/signin", { replace: true });
            }}
          >
            <BsPlayFill />
          </button>
        </div>
        <About>
          <Collapse title="Sobre os jogos">
            <p>
              Esses jogos e atividades devem ser de fácil compreensão e sem
              muitos detalhes para que a criança consiga entender sem perder o
              foco em alguma parte do jogo, visto que geralmente as crianças com
              autismo têm dificuldades em enxergar o todo a partir de uma parte,
              podendo se ater a um detalhe do material sem entender ele como um
              todo. Jogo da memória: o jogo de encontrar pares de cartas
              estimula e desenvolve a concentração, exercita o cérebro, melhora
              a atenção, aprimora as habilidades cognitivas, desenvolve um
              pensamento mais rápido, melhora o foco, principalmente melhora a
              memória visual e compreensão de imagens. Reconhecer formas:
              Reconhecer formas estimula a percepção visual, instiga a noção de
              cor e quantidade, favorece o processo de identificação de figuras
              geométricas, estimula a atenção e a motricidade e desenvolve a
              reprodução de modelos.
            </p>
          </Collapse>
          <Collapse title="Autismo">
            <p>
              O transtorno do espectro autista (TEA) é um distúrbio do
              neurodesenvolvimento caracterizado por desenvolvimento atípico,
              manifestações comportamentais, déficits na comunicação e na
              interação social, padrões de comportamentos repetitivos e
              estereotipados, podendo apresentar um repertório restrito de
              interesses e atividades. Sinais de alerta no neurodesenvolvimento
              da criança podem ser percebidos nos primeiros meses de vida, sendo
              o diagnóstico estabelecido por volta dos 2 a 3 anos de idade. A
              prevalência é maior no sexo masculino. O TEA é muito variado e
              cada caso é um caso, por isso da importância de uma avaliação
              detalhada e um planejamento personalizado para cada caso. Para
              auxiliar no desenvolvimento destas habilidades que são
              pré-requisitos para a fala e de outras que estão afetadas no caso
              do Autismo, se faz importante o uso de recursos terapêuticos que
              irão auxiliar nesse desenvolvimento. Aqui podemos citar jogos
              diversos, atividades visuo-motoras, atividades que proporcionam a
              manutenção da atenção e foco, jogos interacionais e que estimulem
              as habilidades comunicativas, noção de cores, tamanho, formas,
              números, quantidades, encaixes, habilidades escolares, cognitivas
              entre outras.
            </p>
          </Collapse>
          <Collapse title="Sindrome de Down">
            <p>
              O brincar é indispensável para o desenvolvimento da criança,
              pensando nisso e na crescente influência que os jogos eletrônicos
              exercem sobre as crianças, o jogo foi desenvolvido buscando
              estimular as crianças com síndrome de Down e Autismo, além de,
              claro, divertir. Para saber mais sobre a Síndrome de Down acesse
              site da Aldeia 21, associação que acolhe e informa a comunidade
              sobre a Trissomia do 21. link
            </p>
          </Collapse>
        </About>
      </Game>
    </>
  );
};

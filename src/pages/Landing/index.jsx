import React from "react";
import { Header, Game, About } from "./styles";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <div>
          <p>Jogando Autista</p>
        </div>
        <div className="nav">
          <a href="#sobre">Sobre</a>
          <Link to="/signin">Login</Link>
        </div>
      </Header>
      <Game id="jogo">
        <div>
          <img src="http://lorempixel.com.br/160/160/?1" />
          <button
            type="button"
            onClick={() => {
              navigate("/signin", { replace: true });
            }}
          >
            <BsPlayFill />
          </button>
        </div>
      </Game>
      <About id="sobre">
        <div>
          <h1>Autismo</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ipsum incidunt similique reiciendis culpa corporis.
            Temporibus ab neque, odit tempore itaque veniam quis culpa animi
            odio est laudantium? Ipsum, quam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil ullam nam accusamus debitis
            consequatur delectus unde itaque iure odit quis incidunt, qui harum
            blanditiis minima voluptate! Officia nam possimus quisquam!
          </p>
        </div>
        <div>
          <h1>Sindrome de Down</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ipsum incidunt similique reiciendis culpa corporis.
            Temporibus ab neque, odit tempore itaque veniam quis culpa animi
            odio est laudantium? Ipsum, quam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil ullam nam accusamus debitis
            consequatur delectus unde itaque iure odit quis incidunt, qui harum
            blanditiis minima voluptate! Officia nam possimus quisquam!
          </p>
        </div>
      </About>
    </>
  );
};

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Container,
  Input,
  Submit,
  InputDiv,
  SpanError,
  Links,
  PasswordDiv,
  ToggleVisibility,
  Label,
} from "./styles";
import { useSession } from "../../../hooks/useSession";

export const SignIn = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleError = {
    email: (message) => setEmailError(message),
    password: (message) => setPasswordError(message),
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Insira seu e-mail.");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Insira sua senha.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn(email, password);
    if (res) handleError[res.field](`⨉ ${res.message}`);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <InputDiv>
        <Label>Email</Label>
        <Input
          isOnError={emailError}
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="Insira seu e-mail."
          type="email"
          required
        />
        {emailError && <SpanError>{emailError}</SpanError>}
      </InputDiv>
      <InputDiv>
        <Label>Senha</Label>
        <PasswordDiv>
          <Input
            isOnError={passwordError}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            placeholder="Insira sua senha."
            type={passwordVisibility ? "text" : "password"}
            required
          />
          <ToggleVisibility
            type="button"
            onClick={() => setPasswordVisibility((prev) => !prev)}
          >
            {passwordVisibility ? <FiEyeOff /> : <FiEye />}
          </ToggleVisibility>
        </PasswordDiv>
        {passwordError && <SpanError>{passwordError}</SpanError>}
      </InputDiv>
      <Submit type="submit">Entrar</Submit>
      <Links>
        <span>
          Esqueceu sua senha?{" "}
          <Link to="/signup" replace>
            Clique Aqui
          </Link>
        </span>
        <span>
          Cadastre-se agora{" "}
          <Link to="/signup" replace>
            Clique Aqui
          </Link>
        </span>
      </Links>
    </Container>
  );
};

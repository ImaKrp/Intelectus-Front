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

export const SignUp = () => {
  const { signUp } = useSession();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyEmailError, setVerifyEmailError] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [verifyPasswordVisibility, setVerifyPasswordVisibility] =
    useState(false);

  const handleError = {
    email: (message) => setEmailError(message),
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Insira seu e-mail.");
    if (!verifyEmail) return;
    setVerifyEmailError(
      value === verifyEmail ? "" : "⨉ Os emails não conferem."
    );
  };

  const handleVerifyEmailChange = (value) => {
    setVerifyEmail(value);
    setVerifyEmailError(
      value
        ? value === email
          ? ""
          : "⨉ Os emails não conferem."
        : "⨉ Verifique seu email."
    );
  };

  const handleVerifyPasswordChange = (value) => {
    setVerifyPassword(value);
    setVerifyPasswordError(
      value
        ? value === password
          ? ""
          : "⨉ As senhas não conferem."
        : "⨉ Verifique sua senha."
    );
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Insira sua senha.");
    if (!verifyPassword) return;
    setVerifyPasswordError(
      value === verifyPassword ? "" : "⨉ As senhas não conferem."
    );
  };

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value ? "" : "⨉ Insira seu nome.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (verifyPasswordError || verifyEmailError) return;

    const res = await signUp(name, email, password);

    if (res) handleError[res.field](`⨉ ${res.message}`);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <InputDiv>
        <Label>Nome</Label>
        <Input
          isOnError={nameError}
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="Insira seu nome."
          type="text"
          required
        />
        {nameError && <SpanError>{nameError}</SpanError>}
      </InputDiv>
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
        <Label>Verifique o Email</Label>
        <Input
          isOnError={verifyEmailError}
          value={verifyEmail}
          onChange={(e) => handleVerifyEmailChange(e.target.value)}
          placeholder="Digite novamente seu e-mail."
          type="email"
          required
        />
        {verifyEmailError && <SpanError>{verifyEmailError}</SpanError>}
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
      <InputDiv>
        <Label>Verifique a Senha</Label>
        <PasswordDiv>
          <Input
            isOnError={verifyPasswordError}
            value={verifyPassword}
            onChange={(e) => handleVerifyPasswordChange(e.target.value)}
            placeholder="Digite novamente sua senha."
            type={verifyPasswordVisibility ? "text" : "password"}
            required
          />
          <ToggleVisibility
            type="button"
            onClick={() => setVerifyPasswordVisibility((prev) => !prev)}
          >
            {verifyPasswordVisibility ? <FiEyeOff /> : <FiEye />}
          </ToggleVisibility>
        </PasswordDiv>
        {verifyPasswordError && <SpanError>{verifyPasswordError}</SpanError>}
      </InputDiv>
      <Submit type="submit">Entrar</Submit>
      <Links>
        <span>
          Entre agora{" "}
          <Link to="/signin" replace>
            Clique Aqui
          </Link>
        </span>
      </Links>
    </Container>
  );
};

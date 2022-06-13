import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Input,
  Submit,
  InputDiv,
  SpanError,
  Links,
  Label,
} from "./styles";
import { useSession } from "../../../hooks/useSession";

export const ForgotPassword = () => {
  const { passwordRecovery } = useSession();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleError = {
    email: (message) => setEmailError(message),
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Insira seu e-mail.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await passwordRecovery(email);
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
      <Submit type="submit">Enviar</Submit>
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

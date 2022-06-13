import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Input,
  Submit,
  InputDiv,
  SpanError,
  Links,
  Label,
  PasswordDiv,
  ToggleVisibility,
} from "./styles";
import { useSession } from "../../../hooks/useSession";

export const ChangePassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { changePassword } = useSession();
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [verifyPasswordVisibility, setVerifyPasswordVisibility] =
    useState(false);

  const handleError = {
    password: (message) => setPasswordError(message),
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verifyPasswordError) return;
    const res = await changePassword(password, id);
    if (res) handleError[res.field](`⨉ ${res.message}`);
    else navigate("/signin", { replace: true });
  };
  return (
    <Container onSubmit={handleSubmit}>
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
      <Submit type="submit">Alterar senha</Submit>
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

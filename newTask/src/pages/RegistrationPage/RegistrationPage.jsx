import { Link, useNavigate } from "react-router-dom";
import * as S from "./RegistrationPage.styled";
import { useState } from "react";
import { fetchRegistration } from "../../api";

const RigistrationPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const enterHandler = async (e) => {
    e.preventDefault();
    if (!login || !password || !name) {
      alert("Заполните обязательные поля");
      return;
    }
    try {
      const response = await fetchRegistration(login, name, password);
      localStorage.setItem("token", response.user.token);
      navigate("/");
    } catch (error) {
      alert("Пользователь с таким логином уже существует");
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Регистрация</S.ModalTitle>
            <S.ModalFormLogin id="formLogUp" action="#" />
            <S.ModalFormLoginInput
              onChange={(e) => nameHandler(e)}
              value={name}
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
            />
            <S.ModalFormLoginInput
              onChange={(e) => loginHandler(e)}
              value={login}
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.ModalFormLoginInput
              onChange={(e) => passwordHandler(e)}
              value={password}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={(e) => enterHandler(e)} id="SignUpEnter">
              Зарегистрироваться
            </S.ModalBtnEnter>
            <S.ModalFromGroup>
              <S.ModalFromGroupText>
                Уже есть аккаунт?{" "}
                <Link to="/login">
                  <S.ModalFromGroupLink>Войдите здесь</S.ModalFromGroupLink>
                </Link>
              </S.ModalFromGroupText>
            </S.ModalFromGroup>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};

export default RigistrationPage;

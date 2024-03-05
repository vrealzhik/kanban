import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styled";
import { useState } from "react";
import { fetchLogin } from "../../api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const enterHandler = async (e) => {
    e.preventDefault();
    if (!login || !password) {
      alert("Заполните обязательные поля");
      return;
    }
    try {
      const response = await fetchLogin(login, password);
      localStorage.setItem("token", response.user.token);
      navigate("/");
    } catch (error) {
      alert("Неправильный логин или пароль");
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Вход</S.ModalTitle>
            <S.ModalFormLogin id="formLogIn" action="#" />
            <S.ModalFormLoginInput
              onChange={(e) => loginHandler(e)}
              value={login}
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <S.ModalFormLoginInput
              onChange={(e) => passwordHandler(e)}
              value={password}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={(e) => enterHandler(e)} id="btnEnter">
              Войти
            </S.ModalBtnEnter>
            <S.ModalFromGroup>
              <S.ModalFromGroupText>
                Нужно зарегистрироваться?
              </S.ModalFromGroupText>
              <Link to="/registration">
                <S.ModalFromGroupLink>
                  Регистрируйтесь здесь
                </S.ModalFromGroupLink>
              </Link>
            </S.ModalFromGroup>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </S.Wrapper>
  );
};

export default LoginPage;

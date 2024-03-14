import { Link, useNavigate } from "react-router-dom";
import * as S from "./RegistrationPage.styled";
import { useState } from "react";
import { fetchRegistration } from "../../api";
import { useUserContext } from "../../contexts/userContext";

const RigistrationPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [nameData, setNameData] = useState("");
  const { login } = useUserContext();

  const nameHandler = (e) => {
    setNameData(e.target.value);
  };

  const loginHandler = (e) => {
    setLoginData(e.target.value);
  };

  const passwordHandler = (e) => {
    setPasswordData(e.target.value);
  };

  const enterHandler = async (e) => {
    e.preventDefault();
    if (!loginData || !passwordData || !nameData) {
      alert("Заполните обязательные поля");
      return;
    }
    try {
      const response = await fetchRegistration(
        loginData,
        nameData,
        passwordData
      );
      login(response.user)
      navigate("/login");
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
              value={nameData}
              type="text"
              nameData="first-nameData"
              id="first-nameData"
              placeholder="Имя"
            />
            <S.ModalFormLoginInput
              onChange={(e) => loginHandler(e)}
              value={loginData}
              type="text"
              nameData="loginData"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.ModalFormLoginInput
              onChange={(e) => passwordHandler(e)}
              value={passwordData}
              type="passwordData"
              nameData="passwordData"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={(e) => enterHandler(e)} id="SignUpEnter">
              Зарегистрироваться
            </S.ModalBtnEnter>
            <S.ModalFromGroup>
              <S.ModalFromGroupText>
                Уже есть аккаунт?{" "}
                <Link to="/loginData">
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

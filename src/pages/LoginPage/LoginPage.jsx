import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styled";
import { useEffect, useState } from "react";
import { fetchLogin } from "../../api";
import { useUserContext } from "../../contexts/userContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const { login } = useUserContext();
  const [error, setError] = useState(null);

  const loginHandler = (e) => {
    setLoginData(e.target.value);
  };

  const passwordHandler = (e) => {
    setPasswordData(e.target.value);
  };

  const enterHandler = async (e) => {
    e.preventDefault();
    if (!loginData || !passwordData) {
      setError("Введите обязательные поля!");
      return;
    }
    try {
      const response = await fetchLogin(loginData, passwordData);
      login(response.user);
      navigate("/");
    } catch (error) {
      console.error("fall", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    setError(null);
  }, [loginData, passwordData]);

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Вход</S.ModalTitle>
            <S.ModalFormLogin id="formLogIn" action="#" />
            <S.ModalFormLoginInput
              onChange={(e) => loginHandler(e)}
              value={loginData}
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <S.ModalFormLoginInput
              onChange={(e) => passwordHandler(e)}
              value={passwordData}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            {error && <S.Error>{error}</S.Error>}
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

import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styled";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    localStorage.setItem("isAuth", JSON.stringify(true));
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Вход</S.ModalTitle>
            <S.ModalFormLogin id="formLogIn" action="#" />
            <S.ModalFormLoginInput
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <S.ModalFormLoginInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={loginHandler} id="btnEnter">
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

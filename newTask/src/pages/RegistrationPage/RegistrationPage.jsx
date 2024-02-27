import { Link } from "react-router-dom";
import * as S from "./RegistrationPage.styled";

const RigistrationPage = () => {
  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Регистрация</S.ModalTitle>
            <S.ModalFormLogin id="formLogUp" action="#" />
            <S.ModalFormLoginInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
            />
            <S.ModalFormLoginInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.ModalFormLoginInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <Link to="/">
              <S.ModalBtnEnter id="SignUpEnter">
                Зарегистрироваться
              </S.ModalBtnEnter>
            </Link>
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

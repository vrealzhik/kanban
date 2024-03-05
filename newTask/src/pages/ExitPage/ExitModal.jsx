import { Link } from "react-router-dom";
import * as S from "./ExitModal.styled";

const ExitModal = () => {
  const exitHandler = () => {
    localStorage.removeItem("token");
  };
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>Выйти из аккаунта?</S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes onClick={exitHandler}>Да, выйти</S.PopExitYes>
              <Link to="/">
                <S.PopExitNo>Нет, остаться</S.PopExitNo>
              </Link>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default ExitModal;

import * as S from "./ExitModal.styled";

const ExitModal = ({ isOpenExit }) => {
  return (
    <S.PopExit isOpenExit={isOpenExit} onClick={(e) => e.stopPropagation()}>
      <S.PopExitContainer> 
        <S.PopExitBlock>
          <S.PopExitTitle>Выйти из аккаунта?</S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes>
                <S.PopExitYesLink>Да, выйти</S.PopExitYesLink>
              </S.PopExitYes>
              <S.PopExitNo>
                Нет, остаться
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default ExitModal;

import * as S from "./UserModal.styled";

const UserModal = ({ isOpenUser, setIsOpenExit }) => {
  return (
    <S.HeaderPopUserSet
      onClick={(e) => e.stopPropagation()}
      isOpenUser={isOpenUser}
      id="user-set-target"
    >
      <a href="">x</a>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeText>Темная тема</S.PopUserSetThemeText>
        <S.PopUserSetCheckbox type="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.PopUserSetButton type="button" onClick={() => setIsOpenExit(true)}>
        Выйти
      </S.PopUserSetButton>
    </S.HeaderPopUserSet>
  );
};

export default UserModal;

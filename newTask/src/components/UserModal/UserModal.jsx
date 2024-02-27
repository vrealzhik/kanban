import { Link } from "react-router-dom";
import * as S from "./UserModal.styled";

const UserModal = ({ isOpenUser }) => {
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
      <Link to="/exit">
        <S.PopUserSetButton type="button">Выйти</S.PopUserSetButton>
      </Link>
    </S.HeaderPopUserSet>
  );
};

export default UserModal;

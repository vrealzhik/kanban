import { Link } from "react-router-dom";
import * as S from "./UserModal.styled";
import { useUserContext } from "../../contexts/userContext";

const UserModal = ({ isOpenUser }) => {
  const { user } = useUserContext();
  return (
    <S.HeaderPopUserSet
      onClick={(e) => e.stopPropagation()}
      $isOpenUser={isOpenUser}
      id="user-set-target"
    >
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <Link to="/exit">
        <S.PopUserSetButton type="button">Выйти</S.PopUserSetButton>
      </Link>
    </S.HeaderPopUserSet>
  );
};

export default UserModal;

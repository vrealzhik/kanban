import UserModal from "../UserModal/UserModal";
import * as S from "./Header.styled";

const Header = ({ isOpenUser, setIsOpenUser, setIsOpenNewTask }) => {
  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <S.HeaderLogo src="/logo.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew
              id="btnMainNew"
              onClick={() => setIsOpenNewTask(true)}
            >
              Создать новую задачу
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={() => setIsOpenUser(true)}>
              Ivan Ivanov
            </S.HeaderUser>
            <UserModal isOpenUser={isOpenUser} />
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
};

export default Header;

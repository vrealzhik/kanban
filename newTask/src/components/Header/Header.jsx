import UserModal from "../UserModal/UserModal";

const Header = ({
  isOpenUser,
  setIsOpenUser,
  setIsOpenExit,
  setIsOpenNewTask,
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={() => setIsOpenNewTask(true)}
            >
              Создать новую задачу
            </button>
            <p
              className="header__user _hover02"
              onClick={() => setIsOpenUser(true)}
            >
              Ivan Ivanov
            </p>
            <UserModal isOpenUser={isOpenUser} setIsOpenExit={setIsOpenExit} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

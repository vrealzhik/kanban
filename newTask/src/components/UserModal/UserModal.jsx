const UserModal = ({ isOpenUser, setIsOpenExit }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={
        isOpenUser
          ? "header__pop-user-set pop-user-active"
          : "header__pop-user-set"
      }
      id="user-set-target"
    >
      <a href="">x</a>
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button
        type="button"
        className="exit-button _hover03"
        onClick={() => setIsOpenExit(true)}
      >
        Выйти
      </button>
    </div>
  );
};

export default UserModal;

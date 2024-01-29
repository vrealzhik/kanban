import CalendarIcon from "../CalendarIcon/CalendarIcon";

const CardItem = ({ theme, title, date, setIsOpenEditTask }) => {
  let color = ""
  switch (theme) {
    case "Web Design":
      color = "_orange";
      break;
    case "Research":
      color = "_green";
      break;
    case "Copywriting":
      color = "_purple";
      break;
  }
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={"card__theme " + color}>
            <p className={color}>{theme}</p>
          </div>
          <div className="card__btn" onClick={() => setIsOpenEditTask(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="card__content">
          <a href="#" target="_blank">
            <h3 className="card__title">{title}</h3>
          </a>
          <div className="card__date">
            <CalendarIcon />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

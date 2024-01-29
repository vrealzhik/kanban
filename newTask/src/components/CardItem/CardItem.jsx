import CalendarIcon from "../CalendarIcon/CalendarIcon";

const CardItem = ({topic, title}) => {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className="card__theme _orange">
            <p className="_orange">{topic}</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href="#" target="_blank">
            <h3 className="card__title">{title}</h3>
          </a>
          <div className="card__date">
            <CalendarIcon />
            <p>30.10.23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

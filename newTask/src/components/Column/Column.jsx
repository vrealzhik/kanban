import CardItem from "../CardItem/CardItem";

const Column = ({ title, setIsOpenEditTask, cardList }) => {
  
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => {
          return (
            <CardItem
              key={card.id}
              title={card.title}
              date={card.date}
              theme={card.theme}
              setIsOpenEditTask={setIsOpenEditTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Column;

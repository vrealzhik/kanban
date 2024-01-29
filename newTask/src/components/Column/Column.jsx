import CardItem from "../CardItem/CardItem";

const Column = ({title}) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <CardItem title={"Задача"} topic={"Web design"}/>
        <CardItem title={"Новая задача"} topic={"not Web design"}/>
        <CardItem title={"Старая задача"} topic={"maybe Web design"}/>
        <CardItem title={"Старая новая задача"} topic={"new Web design"}/>
        <CardItem title={"Новая старая задача"} topic={"design"}/>
      </div>
    </div>
  );
};

export default Column;

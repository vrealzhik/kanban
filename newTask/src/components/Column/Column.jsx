import CardItem from "../CardItem/CardItem";
import * as S from "./Column.styled";

const Column = ({ title, setIsOpenEditTask, cardList }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleText>{title}</S.ColumnTitleText>
      </S.ColumnTitle>
      <S.Cards>
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
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;
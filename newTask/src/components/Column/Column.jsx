import CardItem from "../CardItem/CardItem";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleText>{title}</S.ColumnTitleText>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((card) => {
          return (
            <CardItem
              key={card._id}
              id={card.userId}
              title={card.title}
              topic={card.topic}
              date={card.date}
            />
          );
        })}
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;

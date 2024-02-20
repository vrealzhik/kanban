import CalendarIcon from "../CalendarIcon/CalendarIcon";
import * as S from "./CardItem.styled";

const CardItem = ({ theme, title, date, setIsOpenEditTask }) => {
  let color = "";
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
    <S.CardsItem>
      <S.CardsCard>
        <S.CardGroup>
          <S.CardTheme $color={color} >
            <S.CardThemeText>{theme}</S.CardThemeText>
          </S.CardTheme>
          <S.CardBtn onClick={() => setIsOpenEditTask(true)}>
            <S.CardBtnDot></S.CardBtnDot>
            <S.CardBtnDot></S.CardBtnDot>
            <S.CardBtnDot></S.CardBtnDot>
          </S.CardBtn>
        </S.CardGroup>
        <S.CardContent>
          <a href="#" target="_blank">
            <S.CardTitle>{title}</S.CardTitle>
          </a>
          <S.CardDate>
            <CalendarIcon />
            <S.CardDateValue>{date}</S.CardDateValue>
          </S.CardDate>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
};

export default CardItem;

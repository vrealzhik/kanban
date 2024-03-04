import { Link } from "react-router-dom";
import CalendarIcon from "../CalendarIcon/CalendarIcon";
import * as S from "./CardItem.styled";

const CardItem = ({ topic, title, date, id }) => {
  let color = "";
  switch (topic) {
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
          <S.CardTheme $color={color}>
            <S.CardThemeText>{topic}</S.CardThemeText>
          </S.CardTheme>
          <Link to={`/card/${id}`}>
            <S.CardBtn>
              <S.CardBtnDot></S.CardBtnDot>
              <S.CardBtnDot></S.CardBtnDot>
              <S.CardBtnDot></S.CardBtnDot>
            </S.CardBtn>
          </Link>
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

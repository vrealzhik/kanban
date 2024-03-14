import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import * as S from "./CalendarElement.styled";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

const CalendarElement = ({ date, setDate }) => {
  let footer = <S.UnderText>Выберите срок исполнения</S.UnderText>;
  if (date) {
    footer = (
      <S.UnderText>
        Срок исполнения: {format(date, "PP", { locale: ru })}
      </S.UnderText>
    );
  }
  return (
    <div>
      <S.DateTitle>Даты</S.DateTitle>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={footer}
        styles={{
          head_cell: {
            width: "5px",
          },
        }}
        locale={ru}
      />
    </div>
  );
};

export default CalendarElement;

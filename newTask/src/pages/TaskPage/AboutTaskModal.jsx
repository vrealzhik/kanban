import { Link, useParams } from "react-router-dom";
import CalendarElement from "../../components/CalendarElement/CalendarElement";
import * as S from "./AboutTaskModal.styled";
import { useTaskContext } from "../../contexts/taskContext";

const AboutTaskModal = () => {
  const { taskId } = useParams();
  const { tasks } = useTaskContext();
  const currentTask = tasks.filter((task) => task._id === taskId)[0];
  let color = "" || "_orange";
  switch (currentTask.topic) {
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
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{currentTask.title}</S.PopBrowseTitle>
              <S.CategoriesTheme $topicColor={color}>
                <S.CategoriesThemeText>
                  {currentTask.topic}
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusText>{currentTask.status}</S.StatusText>
              <S.StatusThemes>
                <S.StatusThemeItemHide>
                  <S.StatusThemeItemText>Без статуса</S.StatusThemeItemText>
                </S.StatusThemeItemHide>
                <S.StatusThemeItem>
                  <S.StatusThemeItemText>Нужно сделать</S.StatusThemeItemText>
                </S.StatusThemeItem>
                <S.StatusThemeItemHide>
                  <S.StatusThemeItemText>В работе</S.StatusThemeItemText>
                </S.StatusThemeItemHide>
                <S.StatusThemeItemHide>
                  <S.StatusThemeItemText>Тестирование</S.StatusThemeItemText>
                </S.StatusThemeItemHide>
                <S.StatusThemeItemHide>
                  <S.StatusThemeItemText>Готово</S.StatusThemeItemText>
                </S.StatusThemeItemHide>
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowsForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.SubTitle htmlFor="textArea01">Описание задачи</S.SubTitle>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={currentTask.description}
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowsForm>
              <CalendarElement />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowseEdit>Редактировать задачу</S.BtnBrowseEdit>
                <S.BtnBrowseDelete>Удалить задачу</S.BtnBrowseDelete>
              </S.BtnGroup>
              <Link to="/">
                <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
              </Link>
            </S.PopBrowseBtnBrowse>
            <S.PopBroseBtnEdit>
              <S.BtnGroup>
                <S.BtnEditEdit>Сохранить</S.BtnEditEdit>
                <S.BtnEditCancel>Отменить</S.BtnEditCancel>
                <S.BtnEditDelete id="btnDelete">Удалить задачу</S.BtnEditDelete>
              </S.BtnGroup>
              <Link to="/">
                <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
              </Link>
            </S.PopBroseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default AboutTaskModal;

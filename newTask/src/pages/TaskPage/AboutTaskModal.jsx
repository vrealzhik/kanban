import { Link, useNavigate, useParams } from "react-router-dom";
import CalendarElement from "../../components/CalendarElement/CalendarElement";
import * as S from "./AboutTaskModal.styled";
import { useTaskContext } from "../../contexts/taskContext";
import { deleteTask } from "../../api";
import { statusList } from "../../data";
import { useState } from "react";

const AboutTaskModal = () => {
  const { taskId } = useParams();
  const { tasks, updateTasks } = useTaskContext();
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
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

  const hideChange = () => {
    setHide(!hide);
  };

  const editTaskFunc = () => {};

  const deleteTaskFunc = async () => {
    const response = await deleteTask(
      JSON.parse(localStorage.getItem("user"))?.token,
      taskId
    );
    updateTasks(response.tasks);
    navigate("/");
  };

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
              <S.StatusText>Статус</S.StatusText>
              <S.StatusThemes>
                {statusList.map((status) => {
                  return (
                    <S.StatusThemeItem
                      hide={(status !== currentTask.status && hide)}
                      key={status}
                    >
                      <S.StatusThemeItemText>{status}</S.StatusThemeItemText>
                    </S.StatusThemeItem>
                  );
                })}
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
            <S.PopBrowseBtnBrowse hide={hide}>
              <S.BtnGroup>
                <S.BtnBrowseEdit onClick={hideChange}>
                  Редактировать задачу
                </S.BtnBrowseEdit>
                <S.BtnBrowseDelete onClick={deleteTaskFunc}>
                  Удалить задачу
                </S.BtnBrowseDelete>
              </S.BtnGroup>
              <Link to="/">
                <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
              </Link>
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnEdit hide={hide}>
              <S.BtnGroup>
                <S.BtnEditEdit onClick={editTaskFunc}>Сохранить</S.BtnEditEdit>
                <S.BtnEditCancel onClick={hideChange}>Отменить</S.BtnEditCancel>
                <S.BtnEditDelete onClick={deleteTaskFunc}>
                  Удалить задачу
                </S.BtnEditDelete>
              </S.BtnGroup>
              <Link to="/">
                <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
              </Link>
            </S.PopBrowseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default AboutTaskModal;

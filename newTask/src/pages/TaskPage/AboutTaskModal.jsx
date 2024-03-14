import { Link, useNavigate, useParams } from "react-router-dom";
import CalendarElement from "../../components/CalendarElement/CalendarElement";
import * as S from "./AboutTaskModal.styled";
import { useTaskContext } from "../../contexts/taskContext";
import { deleteTask, editTask } from "../../api";
import { statusList } from "../../data";
import React, { useState } from "react";

const AboutTaskModal = () => {
  const { taskId } = useParams();
  const { tasks, updateTasks } = useTaskContext();
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const currentTask = tasks.filter((task) => task._id === taskId)[0];
  const [currentStatus, setCurrentStatus] = useState(currentTask.status);
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

  const statusChange = (e) => {
    setCurrentStatus(e.target.value);
    // if (e.target.tagName === "P") {
    //   setCurrentStatus(e.target.innerText);
    // }
  };

  const editTaskFunc = async () => {
    const response = await editTask(
      JSON.parse(localStorage.getItem("user"))?.token,
      currentTask.title,
      currentTask.topic,
      currentStatus,
      currentTask.description,
      currentTask.date,
      taskId
    );
    updateTasks(response.tasks);
    navigate("/");
  };

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
              <S.StatusThemes onClick={(e) => statusChange(e)}>
                {statusList.map((status, index) => {
                  return (
                    <React.Fragment key={index}>
                      <S.StatusItemInput
                        id={status}
                        value={status}
                        name="status"
                        defaultChecked={status === currentTask.status}
                      />
                      <S.StatusItemLabel
                        $hide={status !== currentTask.status && hide}
                        htmlFor={status}
                      >
                        {status}
                      </S.StatusItemLabel>
                    </React.Fragment>
                    // <S.StatusThemeItem
                    //   $hide={status !== currentTask.status && hide}
                    //   $currentst={status === currentTask.status}
                    //   key={status}
                    // >
                    //   <S.StatusThemeItemText>{status}</S.StatusThemeItemText>
                    // </S.StatusThemeItem>
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
            <S.PopBrowseBtnBrowse $hide={hide}>
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
            <S.PopBrowseBtnEdit $hide={hide}>
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

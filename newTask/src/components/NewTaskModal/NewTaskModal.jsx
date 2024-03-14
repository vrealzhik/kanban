import { useState } from "react";
import CalendarElement from "../CalendarElement/CalendarElement";
import * as S from "./NewTaskModal.styled";
import { postTask } from "../../api";
import { useTaskContext } from "../../contexts/taskContext";

const NewTaskModal = ({ isOpenNewTask, setIsOpenNewTask }) => {
  const [topic, setTopic] = useState("Web Design");
  const [title, setTitle] = useState("");
  const status = "Без статуса";
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date)
  const { updateTasks } = useTaskContext();
  const checkboxHandler = (e) => {
    setTopic(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleNewTask = async () => {
    const response = await postTask(
      JSON.parse(localStorage.getItem("user"))?.token,
      title,
      topic,
      status,
      description,
      date
    );
    updateTasks(response.tasks);
    setIsOpenNewTask(false);
  };

  return (
    <S.PopNewCard $isOpenNewTask={isOpenNewTask} id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock onClick={(e) => e.stopPropagation()}>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose onClick={() => setIsOpenNewTask(false)}>
              &#10006;
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="formTitle">Название задачи</S.SubTitle>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={(e) => titleHandler(e)}
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="textArea">Описание задачи</S.SubTitle>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) => descriptionHandler(e)}
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <S.CalendarBlock>
                <CalendarElement date={date} setDate={setDate}/>
                <input type="hidden" id="datepick_value" value="08.09.2023" />
              </S.CalendarBlock>
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.PopNewCardCategoriesTitle>
                Категория
              </S.PopNewCardCategoriesTitle>
              <S.CategoriesThemes onChange={(e) => checkboxHandler(e)}>
                <S.CategoriesThemeItemInput
                  type="radio"
                  id="webDisign"
                  value="Web Design"
                  name="theme"
                  defaultChecked
                />
                <S.CategoriesThemeItemLabel
                  $color="_orange"
                  htmlFor="webDisign"
                >
                  Web Design
                </S.CategoriesThemeItemLabel>
                <S.CategoriesThemeItemInput
                  type="radio"
                  id="research"
                  value="Research"
                  name="theme"
                />
                <S.CategoriesThemeItemLabel $color="_green" htmlFor="research">
                  Research
                </S.CategoriesThemeItemLabel>
                <S.CategoriesThemeItemInput
                  type="radio"
                  id="copywriting"
                  value="Copywriting"
                  name="theme"
                />
                <S.CategoriesThemeItemLabel
                  $color="_purple"
                  htmlFor="copywriting"
                >
                  Copywriting
                </S.CategoriesThemeItemLabel>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            <S.FormNewCreate id="btnCreate" onClick={handleNewTask}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default NewTaskModal;

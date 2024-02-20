import CalendarElement from "../CalendarElement/CalendarElement";
import * as S from "./AboutTaskModal.styled";

const AboutTaskModal = ({ isOpenEditTask, setIsOpenEditTask }) => {
  return ( 
    <S.PopBrowse isOpenEditTask={isOpenEditTask}
      id="popBrowse" 
    >
      <S.PopBrowseContainer>
        <S.PopBrowseBlock onClick={(e) => e.stopPropagation()}>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>Название задачи</S.PopBrowseTitle>
              <S.CategoriesTheme $topicColor="_orange">
                <S.CategoriesThemeText>Web Design</S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusText>Статус</S.StatusText>
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
              <S.PopBrowsForm
                id="formBrowseCard"
                action="#"
              >
                <S.FormBrowseBlock>
                  <S.SubTitle htmlFor="textArea01" >
                    Описание задачи
                  </S.SubTitle>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowsForm>
              <CalendarElement />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowseEdit>
                  Редактировать задачу
                </S.BtnBrowseEdit>
                <S.BtnBrowseDelete>
                  Удалить задачу
                </S.BtnBrowseDelete>
              </S.BtnGroup>
              <S.BtnBrowseClose
                onClick={() => setIsOpenEditTask(false)}
              >
                Закрыть
              </S.BtnBrowseClose>
            </S.PopBrowseBtnBrowse>
            <S.PopBroseBtnEdit>
              <S.BtnGroup>
                <S.BtnEditEdit>
                  Сохранить
                </S.BtnEditEdit>
                <S.BtnEditCancel>
                 Отменить
                </S.BtnEditCancel>
                <S.BtnEditDelete
                  id="btnDelete"
                >
                  Удалить задачу
                </S.BtnEditDelete>
              </S.BtnGroup>
              <S.BtnBrowseClose>
                Закрыть
              </S.BtnBrowseClose>
            </S.PopBroseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default AboutTaskModal;

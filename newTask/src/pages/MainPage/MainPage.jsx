import "../../App.css";
import NewTaskModal from "../../components/NewTaskModal/NewTaskModal";
import Column from "../../components/Column/Column";
import Header from "../../components/Header/Header";
import TaskBoard from "../../components/TaskBoard/TaskBoard";
import { useEffect, useState } from "react";
import { cardList, statusList } from "../../data";
import * as S from "./MainPage.styled";
import { Outlet } from "react-router-dom";

function MainPage() {
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenNewTask, setIsOpenNewTask] = useState(false);
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const addTask = () => {
    const newTask = {
      id: cards.length + 1,
      title: "Название задачи",
      status: "Без статуса",
      theme: "Web Design",
      date: "30.10.23",
    };
    setCards([...cards, newTask]);
  };

  const handleCloseModals = () => {
    if (isOpenUser || isOpenNewTask) {
      setIsOpenUser(false);
      setIsOpenNewTask(false);
    }
  };

  return (
    <>
      <Outlet />
      <S.Wrapper className="wrapper" onClick={handleCloseModals}>
        <NewTaskModal
          addTask={addTask}
          isOpenNewTask={isOpenNewTask}
          setIsOpenNewTask={setIsOpenNewTask}
        />
        <Header
          isOpenUser={isOpenUser}
          setIsOpenUser={setIsOpenUser}
          setIsOpenNewTask={setIsOpenNewTask}
        />
        {isLoading ? (
          <S.Loader className="loader">
            <S.LoaderText className="loader-text">
              Данные загружаются
            </S.LoaderText>
          </S.Loader>
        ) : (
          <TaskBoard>
            {statusList.map((status) => {
              return (
                <Column
                  key={status}
                  title={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              );
            })}
          </TaskBoard>
        )}
      </S.Wrapper>
    </>
  );
}

export default MainPage;

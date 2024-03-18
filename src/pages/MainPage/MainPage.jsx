import "../../App.css";
import NewTaskModal from "../../components/NewTaskModal/NewTaskModal";
import Column from "../../components/Column/Column";
import Header from "../../components/Header/Header";
import TaskBoard from "../../components/TaskBoard/TaskBoard";
import { useEffect, useState } from "react";
import { statusList } from "../../data";
import * as S from "./MainPage.styled";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api";
import {useTaskContext} from "../../contexts/taskContext"

function MainPage() {
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenNewTask, setIsOpenNewTask] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {tasks, updateTasks} = useTaskContext()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(
          JSON.parse(localStorage.getItem("user"))?.token
        );
        updateTasks(response.tasks);
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        alert("Ошибка сервера, попробуйте позже");
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

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
                  cardList={tasks.filter((task) => task.status === status)}
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

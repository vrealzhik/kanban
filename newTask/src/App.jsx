import "./App.css";
import AboutTaskModal from "./components/AboutTaskModal/AboutTaskModal";
import Column from "./components/Column/Column";
import ExitModal from "./components/ExitModal/ExitModal";
import Header from "./components/Header/Header";
import NewTaskModal from "./components/NewTaskModal/NewTaskModal";
import TaskBoard from "./components/TaskBoard/TaskBoard";

function App() {
  return (
    <div className="wrapper">
      <ExitModal />
      <NewTaskModal />
      <AboutTaskModal />
      <Header />
      <TaskBoard>
        <Column title={"Без статуса"} />
        <Column title={"Нужно сделать"} />
        <Column title={"В работе"} />
        <Column title={"Тестирование"} />
        <Column title={"Готово"} />
      </TaskBoard>
    </div>
  );
}

export default App;

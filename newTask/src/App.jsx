import "./App.css";
import AboutTaskModal from "./components/AboutTaskModal/AboutTaskModal";
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
      <TaskBoard />
    </div>
  );
}

export default App;

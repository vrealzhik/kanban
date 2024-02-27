import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./privateRoute";
import ExitModal from "./pages/ExitPage/ExitModal";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import AboutTaskModal from "./pages/TaskPage/AboutTaskModal";

const App = () => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route />
        <Route path="/" element={<MainPage />}>
          <Route path="/exit" element={<ExitModal />} />
          <Route path="/card/:userId" element={<AboutTaskModal />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

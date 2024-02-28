import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./privateRoute";
import ExitModal from "./pages/ExitPage/ExitModal";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import AboutTaskModal from "./pages/TaskPage/AboutTaskModal";
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const [user, setIsUser] = useState(null);

  const isLogin = (newUser) => {
    setIsUser(newUser);
    navigate("/");
  };

  const logout = () => {
    setIsUser(null);
  };
  return (
    <Routes>
      <Route path="/login" element={<LoginPage isLogin={isLogin} />} />
      <Route
        path="/registration"
        element={<RegistrationPage isLogin={isLogin} />}
      />
      <Route path="*" element={<NotFound />} />
      <Route element={<PrivateRoute isAuth={user} />}>
        <Route />
        <Route path="/" element={<MainPage />}>
          <Route path="/exit" element={<ExitModal logout={logout} />} />
          <Route path="/card/:userId" element={<AboutTaskModal />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

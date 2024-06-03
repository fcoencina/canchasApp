
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Stumenu from './pages/Stumenu';
import Welcome from './pages/Welcome';
import Reserva from './pages/Reserva';
import Historial from './pages/Historial';
import Adminmenu from './pages/Adminmenu';
import Agregar from './pages/Agregar';
import Reporte from './pages/Reporte';
import AuthContextProvider from './contexts/AuthContext';
import StudentRoute from './components/router/StudentRoute';
import AdminRoute from './components/router/AdminRoute';
import PublicRoute from './components/router/PublicRoute';
import Logout from './components/Logout';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Welcome />} />
            <Route path="login/:userType" element={<Login />} />
          </Route>
          <Route path="/" element={<StudentRoute />}>
            <Route path="stumenu" element={<Stumenu />} />
            <Route path="reserva" element={<Reserva />} />
            <Route path="historial" element={<Historial />} />
            <Route path="logoutstu" element={<Logout />} />
          </Route>
          <Route path="/" element={<AdminRoute />}>
            <Route path="adminmenu" element={<Adminmenu />} />
            <Route path="agregar" element={<Agregar />} />
            <Route path="reporte" element={<Reporte />} />
            <Route path="logoutadmin" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;

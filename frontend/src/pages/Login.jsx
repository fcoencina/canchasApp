
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Styles from '../styles/Login.module.css'; // Importa las clases CSS Modules
//contexts
import { useAuthContext } from '../contexts/AuthContext';


const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { userType } = useParams();
  const { login } = useAuthContext();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [form, setForm] = useState({
    "username": "",
    "password": "",
    "profile": userType
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function OnSubmit(event) {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:9000/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error('Error en la solicitud');
      }
      else {
        const data = await res.json();
        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', data.token);

        if (userType === "student") {
          login(userType, data.user.id, form.username);
          navigate("/stumenu");
        }
        else {
          login(userType, data.user.id, form.username);
          navigate("/adminmenu");
        }
      }
    }
    catch (error) {
      setError('Credenciales incorrectas');
      console.error('Error:', error);
    }
  }

  return (
    <div className={Styles.body}>
      <div className={Styles.img}>
        <Header></Header>
        <form onSubmit={OnSubmit} className={`${Styles['form']} ${isVisible ? Styles['form-fade-in-active'] : ''}`}>
          <h1 className={Styles.title}>Inicio Sesión</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className={Styles.element}>
            <label>Usuario</label>
            <br></br>
            <input
              className={Styles.input}
              type="text"
              placeholder="Ingrese usuario"
              value={form.username}
              onChange={(e) => updateForm({ username: e.target.value })}
              required
            />
          </div>
          <div className={Styles.element}>
            <label>Contraseña</label>
            <br></br>
            <input
              className={Styles.input}
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              required
            />
          </div>
          <div className={Styles.element}>
            <button className={Styles.button}>Ingresar</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;


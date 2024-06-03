
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css'; // Importa las clases CSS Modules
//contexts
import {useAuthContext} from '../contexts/AuthContext';


const Login = () => {
  const { userType } = useParams();
  const {login} = useAuthContext();

  const [form, setForm] = useState({
    "username": "",
    "password": ""
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
          login(userType);
          navigate("/stumenu");
        }
        else{
          login(userType);
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
    <div className={styles.body}>
      <div className={styles.img}>
        <Header></Header>
        <form onSubmit={OnSubmit} className={styles.form}>
            <h1 className={styles.title}>Inicio Sesión</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className={styles.element}>
            <label>Usuario</label>
            <br></br>
            <input
              type="text"
              placeholder="Ingrese usuario"
              value={form.username}
              onChange={(e) => updateForm({ username: e.target.value })}
              required
            />
          </div>
          <div className={styles.element}>
            <label>Contraseña</label>
            <br></br>
            <input
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              required
            />
          </div>
          <div className={styles.element}>
            <button className={styles.button}>Ingresar</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;


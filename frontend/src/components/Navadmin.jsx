
import { NavLink } from 'react-router-dom';
import Styles from '../styles/Navadmin.module.css';

function Navadmin() {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.logo}>USM</div>
            <ul className={Styles.navlinks}>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/adminmenu">
                        Pagina Principal
                    </NavLink>
                </li>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/agregar">
                        Agregar
                    </NavLink>
                </li>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/reporte">
                        Reportes y Estadísticas
                    </NavLink>
                </li>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/logoutadmin">
                        Log Out
                    </NavLink>
                </li>
          </ul>
        </nav>
    );
}

export default Navadmin;

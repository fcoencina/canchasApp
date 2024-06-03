
import { NavLink } from 'react-router-dom';
import Styles from '../styles/Navstu.module.css';

function Navstu() {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.logo}>USM</div>
            <ul className={Styles.navlinks}>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/stumenu">
                        Pagina Principal
                    </NavLink>
                </li>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/reserva">
                        Reservar
                    </NavLink>
                </li>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/historial">
                        Historial
                    </NavLink>
                </li>
                <li className={Styles.li}>
                    <NavLink className={Styles.a} to="/logoutstu">
                        Log Out
                    </NavLink>
                </li>
          </ul>
        </nav>
    );
}

export default Navstu;

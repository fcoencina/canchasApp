
import Navadmin from '../components/Navadmin';
import Styles from '../styles/Adminmenu.module.css';
import { useAuthContext } from '../contexts/AuthContext';

const Adminmenu = () => {
  const { userID, username } = useAuthContext();

  return (
    <div className={Styles.body}>
      <Navadmin></Navadmin>
      <p className={Styles.p}>¡BIENVENIDO, {username + userID}!</p>
    </div>
  );
};

export default Adminmenu;

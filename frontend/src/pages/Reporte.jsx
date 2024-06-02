
import React from 'react';
import Navadmin from '../components/Navadmin';
import Styles from '../styles/Reporte.module.css';

function Reporte() {
    return (
        <div className={Styles.body}>
            <Navadmin></Navadmin>
            <p className={Styles.p}>Aquí se desarrolla Reporte y Estadísticas....</p>
        </div>
    );
}

export default Reporte;

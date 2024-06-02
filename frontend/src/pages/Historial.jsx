
import React from 'react';
import Navstu from '../components/Navstu';
import Styles from '../styles/Historial.module.css';

function Historial() {
    return (
        <div className={Styles.body}>
            <Navstu></Navstu>
            <p className={Styles.p}>Aquí se desarrolla el Historial....</p>
        </div>
    );
}

export default Historial;
